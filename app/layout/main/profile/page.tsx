"use client";
import { IoArrowBackCircle } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import Message from '@/app/components/message/layout';
import { getGitHubData } from '@/app/services/request';
import CardProfile from '@/app/components/card-profile/layout';
import Repositories from '../repositories/page';
import styled from 'styled-components';
import { theme } from '@/app/theme';

const styles = {
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'inline-block',
  },
};

const ButtonBack = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  transition: ease-in-out .5s;
  &:hover {
    font-size: 1.7rem;
  }
  *{
    color: ${theme.colors['primary70']};
  }
`


export default function Profile() {
  const [githubData, setGithubData] = useState<any>(null);
  const [query, setQuery] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const [isRepositoriesVisible, setIsRepositoriesVisible] = useState(true);

  const toggleVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
    setIsRepositoriesVisible(!isRepositoriesVisible);
  };

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
            <div onClick={toggleVisibility} style={isProfileVisible ? styles.visible : styles.hidden} >
              <CardProfile
                avatar={githubData.user.avatar_url}
                username={githubData.user.login}
                name={githubData.user.name}
                bio={githubData.user.bio}
                location={githubData.user.location}
              />
            </div>
            <div style={isRepositoriesVisible ? styles.hidden : styles.visible}>
              <ButtonBack href='/'><IoArrowBackCircle /></ButtonBack>
              <Repositories />
            </div>
          </>
        ) : (
          <Message />
        )}
      </div>
    </section>
  );
}
