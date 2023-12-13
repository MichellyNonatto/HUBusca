import axios, { AxiosResponse } from "axios";

interface GitHubData {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  login: string;
  followers: number;
  public_repos: number;
}

interface Repository {
  name: string;
  description: string;
  languages: string[];
  created_at: string;
  pushed_at: string;
}

export async function getGitHubData(username: string): Promise<{ user: GitHubData, repositories: Repository[] }> {
  try {
    require('dotenv').config();
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    // Obter dados do usuário
    const userResponse: AxiosResponse<GitHubData> = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (userResponse.status === 200) {
      const { id, name, avatar_url, bio, location, login, followers, public_repos } = userResponse.data;

      const repositoriesResponse: AxiosResponse<Repository[]> = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (repositoriesResponse.status === 200) {
        const repositories = await Promise.all(repositoriesResponse.data.map(async (repo: Repository) => {
          // Obter linguagens específicas do repositório
          const languagesResponse: AxiosResponse<any> = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/languages`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          repo.languages = Object.keys(languagesResponse.data);

          return repo;
        }));

        return { user: { id, name, avatar_url, bio, location, login, followers, public_repos }, repositories };
      } else {
        throw new Error(`Erro na requisição à API do GitHub para obter repositórios. Status: ${repositoriesResponse.status}`);
      }
    } else {
      throw new Error(`Erro na requisição à API do GitHub para obter dados do usuário. Status: ${userResponse.status}`);
    }
  } catch (error) {
    throw error;
  }
}