import styled from "styled-components";

export const Sheet = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        box-shadow: 0px 0px 1px 1px #020202;
        filter: brightness(120%);
    }
`;