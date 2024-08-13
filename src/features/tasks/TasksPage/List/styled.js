import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const Tasks = styled.ul`
    list-style: none;
    padding-inline-start: 0;
`;

export const Item = styled.li`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.alto};
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    ${({ toggledone }) => toggledone && css`
        background-color: ${({ theme }) => theme.color.forestGreen};
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.crimson};
    `}

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    outline: none;
    color: teal;
`;