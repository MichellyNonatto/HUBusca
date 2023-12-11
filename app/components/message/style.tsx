"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";
import React from "react";
import Image from "next/image";


interface TextValues {
    values: {
        'title': string;
        'subtitle': string;
        'description': string;
    }
}

const Subtitle = styled.h4`
    color: ${theme.colors['primary70']};
    font-weight: 500;
`

const Title = styled.h3`
    color: ${theme.colors['font-primary']};
    font-size: 2rem;
    font-weight: 700;
    padding: .5rem auto;
`

const Description = styled.p`
    color: ${theme.colors['font-secondary']};
    margin: auto;
    margin-bottom: 2rem;
    @media screen and (min-width: 1024px){
        max-width: 60%;
    }
`

const TextContainer = styled.div`
    margin: 3rem auto;
    text-align: center;
`

export const Text: React.FC<TextValues> = ({ values }) => (
    <TextContainer>
        <Subtitle>{values.subtitle}</Subtitle>
        <Title>{values.title}</Title>
        <Description>{values.description}</Description>
        <Image
            src="../img/image-main.svg"
            alt="Imagem"
            width={250}
            height={250}
        />
    </TextContainer>
);