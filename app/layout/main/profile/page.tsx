"use client";
import React, { useEffect, useState } from 'react';
import Message from '@/app/components/message/layout';
import { getGitHubData } from '@/app/services/request';
import CardProfile from '@/app/components/card-profile/layout';

export default function Profile() {
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
        setGithubData(data);
      } catch (error) {
        console.log('Erro ao obter dados do GitHub:', error);
        setGithubData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div>
        {githubData !== null ? (
          <>
            <CardProfile
              avatar={githubData.avatar_url}
              username={githubData.login}
              name={githubData.name}
              bio={githubData.bio}
              location={githubData.location}
            />
            </>
        ) : (
          <Message />
        )}
      </div>
    </section>
  );
}
