import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "../dashboard/dashboard.component";
import PrivateRoute from "./privateRoute";
import NotFound from "../layout/layout";
import Alert from "../layout/alert";
import Login from "../custom-sign-in/custom-sign-in.component";
import OauthLogin from "../oauth-signup/oauth-signup.component";
import ABOUT_US from '../../pages/about-us/about-us.component';

/**
 * Common Routing Parent Handler 
 * 
 * @param {any} props 
 * @returns 
 */
const Routes = props => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={OauthLogin}/>
                <Route exact path="/about-us" component={ABOUT_US}/>
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;