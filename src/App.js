import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utilities/authentication/authentication';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Navbar from "./components/navbar/navbar";
import HomePage from './pages/homepage/homepage.component';
import Routes from "./components/routing/routes";

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import './App.css';

/**
 * creating an instance of Appollo client , 
 * the apollo client connects to the backend graphql
 */
const client = new ApolloClient({
    uri: 'http://localhost:9898/gql'
});



const App = () => {
    useEffect(() => {
            setAuthToken(localStorage.token);
            store.dispatch(loadUser());
        }, []);
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Navbar />
                        <Switch>
                            <Route exact path='/'  component={HomePage} />
                            <Route path='/signin'  component={SignInAndSignUpPage} />
                            <Route component={Routes} />
                        </Switch>
                    </Fragment>
                </Router>
            </Provider>
        </ApolloProvider>
    );
};

export default App;
