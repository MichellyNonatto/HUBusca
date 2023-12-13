'use client'
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme';


const GlobalStyle = createGlobalStyle`
    html {
        padding: 1rem 1.5rem;
        background-color: ${theme.colors['background-primary']};
        @media screen and (min-width: 2560px){
                font-size: 32px;
        }
    }

    * {
        color: ${theme.colors['font-primary']};
    }    

    ul, 
    ol, 
    li {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        * {
            text-decoration: none;
        }
    }

    a:hover{
        opacity: .5;
    }

    @media screen and (max-width: 1024px){
        html {
            font-size: 8px;
        }
    }
`

export default GlobalStyle;
