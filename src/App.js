import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utilities/authentication/authentication';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

const App = () => {
    useEffect(() => {
            setAuthToken(localStorage.token);
            store.dispatch(loadUser());
        }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path='/'  component={HomePage} />
                        <Route path='/signin'  component={SignInAndSignUpPage} />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
