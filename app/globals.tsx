'use client'
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme';


const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${theme.colors['background-primary']};
        padding: 1rem 2rem;
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
        padding: 0;
    }

`

export default GlobalStyle;
