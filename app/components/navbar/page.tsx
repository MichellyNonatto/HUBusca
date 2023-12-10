'use client';
import React, { useState, useEffect } from 'react';
import { IoIosMenu, IoMdSearch, IoMdClose } from 'react-icons/io';
import { Logo, Nav, InputSearch, Toggle } from './style';

export default function Navbar() {
    const isClient = typeof window === 'object';
    const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const inputSearchValues = {
        placeholder: 'Pesquisar',
        icon: <IoMdSearch />,
        type: 'search',
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isClient]);

    const handleToggleClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            {windowWidth <= 768 ? (
                <div>
                    <Nav>
                        <Logo>HUBusca</Logo>
                        <Toggle type='button' onClick={handleToggleClick}>
                            {isMenuOpen ? <IoMdClose/> : <IoIosMenu/>}
                        </Toggle>
                    </Nav>
                    <InputSearch values={inputSearchValues} />
                </div>
            ) : (
                <Nav>
                    <Logo>HUBusca</Logo>
                    <InputSearch values={inputSearchValues} />
                </Nav>
            )}
        </nav>
    );
}
