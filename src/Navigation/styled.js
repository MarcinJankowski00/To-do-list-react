import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";


export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.color.teal};
    padding: 1px;
    width: 100%;
    z-index: 998;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
`;

export const StyledNavLink = styled(NavLink)`
    margin: 25px;
    text-decoration: none;
    outline: none;
    color: ${({ theme }) => theme.color.white};

    &:hover {
        filter: brightness(120%);
        padding-bottom: 4px;
        border-bottom: 1px solid ${({ theme }) => theme.color.white};
        outline: none;
    }

    &.active {
        font-weight: bold;
    }
`;