"use client";
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/layout';
import Aside from './layout/aside/page';
import Main from './layout/main/page';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLargeScreen = windowWidth > 768;

  return (
    <main>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Main />
        {isLargeScreen && windowWidth >= 1024 && (
          <Aside />
        )}
      </div>
    </main>
  );
}
