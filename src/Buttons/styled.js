import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: 920px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: teal;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: rgb(0, 169, 169)
    }

    &:active {
        color: rgb(0, 205, 205)
    }

    &:disabled {
        color: rgb(174, 174, 174);
        cursor: default;
    }
`;