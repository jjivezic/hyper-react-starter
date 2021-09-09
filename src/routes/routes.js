import React from "react";
import { Switch } from "react-router-dom";
import { PublicRoute } from "./publicRoute";
import { PrivateRoute } from "./privateRoute";
import Landing from "../pages/landing/landing";
import Login from "../components/auth/loginComponent/login";
import Dashboard from "../pages/dashboard/dashboard";

const Routes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={Landing} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/app" component={Dashboard} />
        </Switch>
    );
};


export { Routes };
