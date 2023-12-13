"use client";
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/layout';
import Aside from './layout/aside/page';
import Main from './layout/main/page';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 4rem;
  @media screen and (min-width: 1024px){
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }
`

export default function Home() {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.screen.width);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  const isLargeScreen = windowWidth >= 768;

  return (
    <main>
      <Navbar/>
      <Container>
        <Main/>
        {isLargeScreen && windowWidth >= 1024 && <Aside />}
      </Container>
    </main>
  );
}
