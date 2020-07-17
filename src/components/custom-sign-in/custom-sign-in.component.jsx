import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// define login component function
/**
 * Functional component providing a custom login/registration form
 * 
 * @param {any} { login, isAuthenticated } 
 * @returns 
 */
const CustomSignInComponent = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // obtain the credentials from the form
    const { username, password } = formData;

    // define event handlers
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        // prevent default behavior
        e.preventDefault();
        login(username, password);
    };

    // route to the dashboard view upon authentication
    if (isAuthenticated) {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            {/* <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="CustomSignInComponent" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p> */}
            <div className='signin'>
                <form onSubmit={onSubmit}>
                    <FormInput 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        required
                    />
                    <FormInput 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    </div>
                </form>
                <p className="my-1">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </div>
        </Fragment>
    );
};

CustomSignInComponent.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(CustomSignInComponent);