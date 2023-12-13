"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardRecent from '@/app/components/card-recent/layout';
import { theme } from '@/app/theme';
import { getGitHubData } from '@/app/services/request';
import { ButtonDelete } from '@/app/components/card-recent/style';

const Titulo = styled.h4`
  color: ${theme.colors.primary87};
  font-weight: 500;
  margin: 0;
`;

interface GitHubData {
  avatar_url: string;
  location: string;
  login: string;
}

export default function Aside() {
  const [recentSearches, setRecentSearches] = useState<GitHubData[]>([]);
  const [githubData, setGithubData] = useState<any>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');

    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches).reverse());
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryValue = urlParams.get('query');

    const fetchData = async () => {
      try {
        const data = await getGitHubData(queryValue || '');

        if (data && data.user) {
          setRecentSearches((prevSearches) => {
            const searchExists = prevSearches.some(
              (search) => search.login === data.user.login
            );

            if (!searchExists) {
              const newRecentSearches = [data.user, ...prevSearches];
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
      <ButtonDelete onClick={handleClearHistory}>Limpar Histórico</ButtonDelete>
      <ul>
        {recentSearches.map((search, index) => (
          <li key={index}>
            <CardRecent user={search}/>
          </li>
        ))}
      </ul>
    </aside>
  );
}
