import styled, { css } from "styled-components";

export const Sheet = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 1px solid rgb(199, 199, 199);
    padding: 10px;
`;

export const Button = styled.button`
    background-color: teal;
    color: rgb(208, 233, 255);
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: rgb(0, 155, 155);
        transform: scale(1.1);
    }

    &:active {
        box-shadow: 0px 0px 1px 1px #020202;
        background-color: rgb(0, 186, 186);
    }
`;