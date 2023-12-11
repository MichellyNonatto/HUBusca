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
        <aside style={{ width: '20%', padding: '0px 1rem' }}>
            <Titulo>Pesquisas Ressentes</Titulo>
            <ul>
                <li>
                    <CardRecent/>
                </li>
            </ul>
        </aside>
    );
}