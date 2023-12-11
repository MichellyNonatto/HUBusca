import styled from "styled-components";
import { theme } from "@/app/theme"

const Titulo = styled.h4`
    font-weight: 500;
    color: ${theme.colors.primary87};
`

export default function Aside() {
    return (
        <aside style={{ width: '20%', padding: '0px 1rem' }}>
            <Titulo>Pesquisas Ressentes</Titulo>
        </aside>
    );
}