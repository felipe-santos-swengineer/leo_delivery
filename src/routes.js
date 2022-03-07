import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages import
import Home from "./pages/home/Home";

//auth
import StoreProvider from './components/Store/Provider';
import PrivateRoute from "./components/Routes/Private/private";

export default function Routes() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/private" component={Home} />
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    )
}