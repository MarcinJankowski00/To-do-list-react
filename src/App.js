import React from "react";
import TaskPage from "./features/tasks/TaskPage"
import TasksPage from "./features/tasks/TasksPage"
import AuthorPage from "./features/author/AuthorPage"
import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

const App = () => (
    <HashRouter basename="/To-do-list-react">
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;