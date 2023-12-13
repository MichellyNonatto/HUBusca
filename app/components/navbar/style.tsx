import styled from "styled-components"
import { theme } from "@/app/theme"
import React, { useState } from 'react';

interface InputValues {
    values: {
        'placeholder': string;
        'icon': React.ReactNode;
        'type': string
    };
}

const SearchContainer = styled.form`
    background-color: ${theme.colors['background-input']};
    border: 2px solid ${theme.colors['background-primary']};
    border-radius: 1.75rem;
    color: ${theme.colors['font-secondary']};
    display: flex;
    gap: .5rem;
    margin: auto;
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
    align-items: center;
    background-color: ${theme.colors['background-input']};
    border: 2px solid ${theme.colors['background-input']};
    color: ${theme.colors['font-secondary']};
    width: 100%;
    &:focus {
        outline: none;
    }
`

const CustonIcon = styled.i`
    font-size: 1.5rem;
    text-align: center;
    * {
        vertical-align: middle;
       color: ${theme.colors['font-secondary']};
    }
`

export const Nav = styled.nav`
    position: sticky;
    top: 0px;
    background-color: ${theme.colors['background-primary']};
    z-index: 1;
    display: inline-block;
    gap: 25%;
    width: 100%;
    @media screen and (min-width: 1024px){
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
`


export const NavContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    @media screen and (min-width: 1024px){
        display: inline-block;
        gap: 25%;
    } 
`

export const Logo = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    `

export const Toggle = styled.button`
    background-color: transparent;
    border: 0px solid transparent;
    font-size: 2rem;
    `

export const InputSearch: React.FC<InputValues> = ({ values }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Input value:\t', inputValue)
      window.location.href = `/?query=${inputValue}`;
    };
  
    return ( 
      <SearchContainer onSubmit={handleSubmit} method="get">
        <CustonIcon>{values.icon}</CustonIcon>
        <CustomInput
          type={values.type}
          placeholder={values.placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </SearchContainer>
    );
  };