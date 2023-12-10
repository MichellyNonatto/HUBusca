'use client'
import styled from "styled-components"
import { theme } from "@/app/theme"

export interface InputValues {
    values: {
        'placeholder': string;
        'icon': React.ReactNode;
        'type': string
    }
}

const SearchContainer = styled.div`
    background-color: ${theme.colors['background-input']};
    border: 2px solid ${theme.colors['background-primary']};
    border-radius: 1.75rem;
    color: ${theme.colors['font-secondary']};
    display: flex;
    gap: .5rem;
    padding: .5rem 1rem;
    transition: all .1s;
    width: 90%;
    max-width: 45rem;

    &:hover,
    &:focus-within {
        border: 2px solid ${theme.colors['primary-container']};
    }

`

const CustomInput = styled.input`
    background-color: ${theme.colors['background-input']};
    border: 2px solid ${theme.colors['background-input']};
    color: ${theme.colors['font-secondary']};
    height: 100%;
    width: 100%;
    &:focus {
        outline: none;
    }
`

const CustonIcon = styled.i`
    font-size: 1rem;
    * {
       color: ${theme.colors['font-secondary']};
    }
`

export const InputSearch: React.FC<InputValues> = ({ values }) => (
    <SearchContainer>
        <CustonIcon>{values.icon}</CustonIcon>
        <CustomInput placeholder={values.placeholder} />
    </SearchContainer>
);

export const Nav = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 25%;
    width: 100%;

    @media screen and (min-width: 760px){
        justify-content: start;
        gap: 25%;
    } 
`

export const Logo = styled.h1`
    font-size: 1rem;
    font-weight: 700;

    @media screen and (min-width: 760px){
        font-size: 2rem;
    }
`

export const Toggle = styled.button`
    background-color: transparent;
    border: 0px solid transparent;
    font-size: 1.5rem;
`