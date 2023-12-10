'use client'
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme';


const GlobalStyle = createGlobalStyle`
    html {
        background-color: ${theme.colors['background-primary']};
        padding: 1rem 2rem;
    }

    * {
        color: ${theme.colors['font-primary']};
    }    
`

export default GlobalStyle;
