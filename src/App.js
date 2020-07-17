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
import FooterPage from './pages/footerpage/footerpage.component.jsx';

import  {initGA} from './index.js';

import './App.css';

import ReactGA from 'react-ga';

const App = () => {
    useEffect(() => {
            setAuthToken(localStorage.token);
            store.dispatch(loadUser());
        }, []);

    useEffect(() => {
        initGA();
        ReactGA.pageview(window.location.pathname +  window.location.search);
        }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path='/'  component={HomePage} />
                        <Route path='/signin'  component={SignInAndSignUpPage} />
                        <Route component={Routes} />
                    </Switch>
                    <FooterPage/>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
