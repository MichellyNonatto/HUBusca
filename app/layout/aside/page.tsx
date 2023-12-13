"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardRecent from '@/app/components/card-recent/layout';
import { theme } from '@/app/theme';
import { getGitHubData } from '@/app/services/request';

const Titulo = styled.h4`
  color: ${theme.colors.primary87};
  font-weight: 500;
  margin: 0;
`;

export default function Aside() {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [githubData, setGithubData] = useState<any>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');

    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryValue = urlParams.get('query');

    const fetchData = async () => {
      try {
        const data = await getGitHubData(queryValue || '');

        if (data && data.user) {
          setRecentSearches(prevSearches => {
            const searchExists = prevSearches.includes(data.user.login);

            if (!searchExists) {
              const newRecentSearches = [...prevSearches, data.user.login];
              localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
              return newRecentSearches;
            }

            return prevSearches;
          });
        }

        setGithubData(data);
      } catch (error) {
        console.log('Erro ao obter dados do GitHub:', error);
        setGithubData(null);
      }
    };
    if (queryValue) {
      fetchData();
    }
  }, [query]);

  const handleClearHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <aside>
      <Titulo>Pesquisas Recentes:</Titulo>
      <button onClick={handleClearHistory}>Limpar Histórico</button>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>
            {search}
          </li>
        ))}
      </ul>
    </aside>
  );
}
