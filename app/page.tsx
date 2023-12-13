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
  const [toggleState, setToggleState] = useState(false);
  
  const toggleHandler = (prevState: boolean | ((prevState: boolean) => boolean)) => {
    setToggleState(prevState);
  };

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
      <Navbar toggleState={toggleState} toggleHandler={toggleHandler} />
      <Container>
        {toggleState ? <Aside /> : <Main />}
        {isLargeScreen && windowWidth >= 1024 && !toggleState && <Aside />}
        {isLargeScreen && windowWidth >= 1024 && <Aside />}
      </Container>
    </main>
  );
}
