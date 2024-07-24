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
`;

export const StyledNavLink = styled(NavLink)`
    &.active {
        font-weight: bold;
    }
    padding: 25px;
    text-decoration: none;
    outline: none;
    color: ${({ theme }) => theme.color.white};
`;