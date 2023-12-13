"use client";
import React, { useState, useEffect } from 'react';
import { Logo, NavContainer, Nav, InputSearch, Toggle } from './style';
import { IoIosMenu, IoMdSearch, IoMdClose } from 'react-icons/io';

interface NavbarProps {
  toggleState: boolean;
  toggleHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Navbar({ toggleState, toggleHandler }:NavbarProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  const inputSearchValues = {
    placeholder: 'Pesquisar',
    icon: <IoMdSearch />,
    type: 'search',
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

  return (
    <Nav>
      <NavContainer>
        <a href='/'>
        <Logo>HUBusca</Logo>
        </a>
        {windowWidth < 1024 && (
          <Toggle onClick={() => toggleHandler((prevState) => !prevState)}>
            {!toggleState ? <IoIosMenu /> : <IoMdClose />}
          </Toggle>
        )}
      </NavContainer>
      <InputSearch values={inputSearchValues} />
    </Nav>
  );
};