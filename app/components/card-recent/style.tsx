"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";

export const CardContainer = styled.div`
    align-items: center;
    background-color: ${theme.colors["background-card"]};
    border-radius: 0.625rem;
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    padding: 1rem;
`

export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 4rem;
`

export const ContainerText = styled.div`
    text-align: start;
    padding-right: 2rem;
    *{
        margin: 0;
    }
    div{
        align-items: center;
        display: flex;
        gap: .5rem;
        margin-top: .5rem;
        * {
            color: ${theme.colors['primary70']};
            font-size: .8rem;
        }
    }
`

export const ButtonDelete = styled.button`
    background-color: transparent;
    background-color: ${theme.colors['primary70']};
    border: none;
    border-radius: 1.25rem;
    cursor: pointer;
    font-weight: 700;
    padding: .5rem;
    width: 100%;
    margin: 1rem 0px;
    transition: .5s ease-in-out;
    &:hover{
       opacity: .8;
    }
` 