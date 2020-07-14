/*jshint esversion: 9 */
import React, {Fragment, useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import {
    isValidSignupCredentials
} from "../../utilities/validation/validation";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setAlert} from "../../actions/alert";
import {register} from "../../actions/auth";
import "./oauth-signup.styles.scss";

import  {GApageView} from '../../index.js';
/**
 * Functional Signup Component With Oauth
 * 
 * @param {any} {setAlert, register, isAuthenticated } 
 * @returns 
 */
const OauthSignupComponent = ({setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        password2: '',
    });

    const { firstname, lastname, email, username, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
		// perform input field validation
        const res = isValidSignupCredentials(firstname,lastname, email, username, password, password2)
		// emit an alert for malformatted inputs or perform registration call to the backend
        res.isValid === true ? setAlert(res.msg) : register({ email, firstname, lastname, password, username });
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
        <div id="login-box">
            <div className="left">
                <h1>Sign up with email</h1>
                <form onSubmit={onSubmit}>
                    <input type="firstname" name="firstname" placeholder="FirstName" value={firstname} onChange={onChange} required/>
                    <input type="lastname" name="lastname" placeholder="LastName" value={lastname} onChange={onChange} required/>
                    <input type="username" name="username" placeholder="UserName" value={username} onChange={onChange} required/>
                    <input type="email" name="email" placeholder="E-mail" value={email} onChange={onChange} required/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required/>
                    <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={onChange} required/>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>

            <div className="right">
                <span className="loginwith">Sign up with<br/>social network</span>
                <button className="social-signup facebook">Sign up with Facebook</button>
                <button className="social-signup linkedin">Sign up with LinkedIn</button>
                <button className="social-signup twitter">Sign up with Twitter</button>
                <button className="social-signup google">Sign up with Google+</button>
            </div>
        </div>
        </Fragment>
    )
}

OauthSignupComponent.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(OauthSignupComponent);