import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch
}from "react-router-dom"
import AuthToken from "./AuthToken"
import routes from "./routes"

class Routes extends Component {
    render() {
        const routerConfig = routes
        return (
            <BrowserRouter>
                <Switch>
                    <AuthToken routerConfig={ routes }></AuthToken>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;