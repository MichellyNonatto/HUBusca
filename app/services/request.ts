import axios, { AxiosResponse } from "axios";

interface GitHubData {
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  login: string; // Corrigido para incluir o nickname (login)
}

export async function getGitHubData(username: string): Promise<GitHubData> {
  try {
    const token = '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';
    const response: AxiosResponse<GitHubData> = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const { name, avatar_url, bio, location, login } = response.data;
      return { name, avatar_url, bio, location, login };
    } else {
      throw new Error(`Erro na requisição à API do GitHub. Status: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}
