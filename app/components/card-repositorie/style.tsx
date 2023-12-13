"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";
import React, { useState } from "react";

export const Container = styled.div`
    width: 100%;

    @media screen and (min-width: 1024px){
        display: flex;
    }
`

export const ProfileContainer = styled.section`
  

`


export const RepoContainer = styled.section`
    background-color: green;
`

export const Avatar = styled.img`
    border-radius: 50%;
    max-width:  15.625rem;;
    margin: auto;
`

export const Name = styled.h2`
    font-weight: 500;
    
    @media screen and (min-width: 1024px){
        font-size: 2rem;
    }
`

export const ContainerSubtitle = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    *{
        color: ${theme.colors.primary70};
        font-size: .8rem;
    }
`
export const Description = styled.p`
    font-size: .75rem;
    @media screen and (min-width: 1024px){
        width: 20.125rem;
    }
`

interface InfoProps{
    values:{
        'icon': React.ReactNode;
        'number': number;
        'text': string
    }
}

const ContainerValues = styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-bottom: .5rem;
    * {
        margin: 0;
    }
    i {
        * {
            color: ${theme.colors.primary};
            font-size: 1.2rem;
        }
    }
`
export const InfoContainer: React.FC<InfoProps> = ({ values }) => {
    return(
        <ContainerValues>
            <i>
                {values.icon}
            </i>
            <p><b>{values.number}</b></p>
            <p>{values.text}</p>
        </ContainerValues>
    )
}