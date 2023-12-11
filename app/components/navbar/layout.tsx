import { useState, useEffect } from 'react';
import { Logo, NavContainer, Nav, InputSearch, Toggle } from './style';
import { IoIosMenu, IoMdSearch, IoMdClose } from 'react-icons/io';

export default function Navbar() {
    const [state, setState] = useState(false);
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
        };
    }, []);

    return (
        <Nav>
            <NavContainer>
                <Logo>HUBusca</Logo>
                {windowWidth < 1024 && (
                    <Toggle onClick={() => setState((prevState) => !prevState)}>
                        {!state ? <IoIosMenu /> : <IoMdClose />}
                    </Toggle>
                )}
            </NavContainer>
            <InputSearch values={inputSearchValues} />
        </Nav>
    );
}
