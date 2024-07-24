import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage"
import TasksPage from "./features/tasks/TasksPage"
import AuthorPage from "./features/author/AuthorPage"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { List, Nav, StyledNavLink } from "./styled";

export default () => (
    <BrowserRouter basename="/To-do-list-react">
        <Nav>
            <List>
                <li><StyledNavLink to="/zadania">Zadania</StyledNavLink></li>
                <li><StyledNavLink to="/author">O autorze</StyledNavLink></li>
            </List>
        </Nav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/author">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </BrowserRouter>

)