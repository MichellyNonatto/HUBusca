"use client";
import { getGitHubData } from "@/app/services/request";
import { useState, useEffect } from "react";
import CardRepositorie from "@/app/components/card-repositorie/layout";

export default function Repositories() {
  const [githubData, setGithubData] = useState<any>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryValue = urlParams.get('query');

    const fetchData = async () => {
      try {
        setQuery(queryValue || '');
        const data = await getGitHubData(queryValue || '');

        data.repositories.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        setGithubData(data);
      } catch (error) {
        console.log('Erro ao obter dados do GitHub:', error);
        setGithubData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {githubData !== null ? (
          <CardRepositorie user={githubData.user} repositories={githubData.repositories} />
      ) : (
        <h2>Erro na requisição.</h2>
      )}
    </>
  );
}