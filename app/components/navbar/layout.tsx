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
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Adiciona o ouvinte de redimensionamento do navegador ao montar o componente
        window.addEventListener('resize', handleResize);

        // Remove o ouvinte de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Nav>
            <NavContainer>
                <Logo>HUBusca</Logo>
                {windowWidth <= 768 && (
                    <Toggle onClick={() => setState((prevState) => !prevState)}>
                        {!state ? <IoIosMenu /> : <IoMdClose />}
                    </Toggle>
                )}
            </NavContainer>
            <InputSearch values={inputSearchValues} />
        </Nav>
    );
}
