import React from "react";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage"
import TasksPage from "./features/tasks/TasksPage"
import AuthorPage from "./features/author/AuthorPage"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default () => (
    <BrowserRouter basename="/To-do-list-react">
        <nav>
            <ul>
                <li><NavLink activeClassName="active" to="/zadania">Zadania</NavLink></li>
                <li><NavLink activeClassName="active" to="/author">O autorze</NavLink></li>
            </ul>
        </nav>
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