import React from "react";
import { List, Nav, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../routes";

const Navigation = () => (
    <Nav>
        <List>
            <li><StyledNavLink to={toTasks()}>Zadania</StyledNavLink></li>
            <li><StyledNavLink to={toAuthor()}>O autorze</StyledNavLink></li>
        </List>
    </Nav>
);

export default Navigation
