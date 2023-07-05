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
    border-bottom: 2px solid rgb(237, 237, 237);
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
    background-color: green;
    color: white;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: green;

        &:hover {
            background-color: rgb(1, 143, 1);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: rgb(187, 0, 0);

        &:hover {
            background-color: rgb(229, 0, 0);
        }
    `}
`;