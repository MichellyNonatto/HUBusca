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

    // Verifica se a resposta foi bem-sucedida antes de desestruturar
    if (response.status === 200) {
      const { name, avatar_url, bio, location, login } = response.data;
      return { name, avatar_url, bio, location, login };
    } else {
      throw new Error(`Erro na requisição à API do GitHub. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Erro na requisição à API do GitHub:', error.message);
    throw error;
  }
}
