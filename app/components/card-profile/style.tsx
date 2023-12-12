"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";


export const Card = styled.div`
    cursor: pointer;
    background-color: ${theme.colors["background-card"]};
    border-radius: .5rem;
    padding: 1.5rem;
    
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);

    @media screen and (max-width: 765px){ 
        text-align: center;
    }

    @media screen and (min-width: 1024px){
        display: flex;
        gap: 1.5rem;
        margin: 0px 2rem;
    }
    transition: 5ms ease-in-out;
    &:hover{
        opacity: .8;
    }
`

interface AvatarProps {
    image: string;
}

export const Avatar = styled.div<AvatarProps>`
    background: url(${props => props.image}) no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: auto;
    width: 6rem;
    height: 6rem;
`;

export const TextHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    
    @media screen and (min-width: 1024px){
        width: 37.375rem;
    }
`

export const Locale = styled.p`
    align-items: center;
    color: ${theme.colors['primary70']};
    display: flex;
    font-size: .75rem;
    gap: .5rem;

    *{
        color: ${theme.colors['primary70']};
    }
`

export const Name = styled.h4`
    font-weight: 500;
    margin: 0;
`

export const Username = styled.h5`
    font-weight: 400;
    margin: 0;
`

export const Description = styled.p`
    font-size: 0.75rem;
`