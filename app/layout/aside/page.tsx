"use client";
import styled from "styled-components";
import { theme } from "@/app/theme"
import CardRecent from "@/app/components/card-recent/layout";

const Titulo = styled.h4`
    font-weight: 500;
    color: ${theme.colors.primary87};
`

export default function Aside() {
    return (
        <aside style={{width: '20%'}}>
            <Titulo>Pesquisas Recentes:</Titulo>
            <ul>
                <li>
                    <CardRecent/>
                </li>
            </ul>
        </aside>
    );
}