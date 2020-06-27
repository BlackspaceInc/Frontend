import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from "../dashboard/dashboard.component";
import PrivateRoute from "./privateRoute";
import NotFound from "../layout/layout";
import Alert from "../layout/alert";
import Login from "../custom-sign-in/custom-sign-in.component";
import OauthLogin from "../oauth-signup/oauth-signup.component";

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