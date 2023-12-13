"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";

interface InfoProps {
    values: {
        'icon': React.ReactNode;
        'number': number;
        'text': string
    }
}

interface ColorsProps{
    colorPrimary?: boolean;
}

export const Container = styled.div`
    @media screen and (min-width: 1024px){
        display: flex;
        gap: 2rem;
    }
`

export const ProfileContainer = styled.section`
`


export const RepoContainer = styled.section`
    li:last-child {
        border-bottom: 1px solid ${theme.colors["background-input"]};
    }
   li{
        border-top: 1px solid ${theme.colors["background-input"]};
        padding: 2rem 1rem;
    }
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

export const ContainerSubtitle = styled.div<ColorsProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  
  * {
  color: ${({ colorPrimary }) =>
      colorPrimary ? theme.colors.primary87 : theme.colors.primary70};
    font-size: 0.8rem;
  }
`;
export const Description = styled.p`
    font-size: .75rem;
    @media screen and (min-width: 1024px){
        width: 20.125rem;
    }
`

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
    return (
        <ContainerValues>
            <i>
                {values.icon}
            </i>
            <p><b>{values.number}</b></p>
            <p>{values.text}</p>
        </ContainerValues>
    )
}


export const DataContainer = styled.div`
    text-align: end;
    *{
        font-size: .8rem;
    }
`

export const NameRepo = styled.h4`
    font-size: 1.5rem;
    font-weight: 500;
`
export const CardLeague = styled.div`
    display: flex;
    gap: 1rem;

    p{
        background: rgba(230, 224, 233, 0.08);
        border-radius: 1.25rem;
        padding: 0.5rem 1rem;
    }
`