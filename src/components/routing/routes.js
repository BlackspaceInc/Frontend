import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "../dashboard/dashboard";
import PrivateRoute from "./privateRoute";
import NotFound from "../layout/layout";
import Alert from "../layout/alert";
import Login from "../auth/login";
import Register from "../auth/register";
import OauthLogin from "../auth/oauthlogin/oauthlogin";

const Routes = props => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={OauthLogin}/>
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;