import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import App from "./views/App";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Mypage from "./views/Mypage";


function routes() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/app">App</Link> |
                <Link to="/dashboard">dashboard</Link> |
                <Link to="/login">login</Link> |
                <Link to="/mypage">mypage</Link>
            </nav>
            <Switch>
                <Route path="/app" component={App} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/mypage" component={Mypage} />
                <Redirect from="*" to="/app" />
            </Switch>
        </BrowserRouter>
    )
};

export default routes;