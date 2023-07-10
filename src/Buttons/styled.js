import styled from "styled-components";

export const Container = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px
    }
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.teal};
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: default;
    }
`;