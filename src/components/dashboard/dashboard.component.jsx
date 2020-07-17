import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Functional component providing access to user dashboard
 * 
 * @param {any} {token, isAuthenticated, loading} 
 * @returns 
 */
const DashboardComponent = ({token, isAuthenticated, loading}) => {
    // set the token to be used by all further requests
    var profile = null
    return loading === null ? (
        <spinner />
    ) : (
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className='fas fa-user' /> Welcome
            </p>
            {profile !== null ? (
                <Fragment>
                    <p> Welcome to BlackSpace </p>
                </Fragment>
            ) : (
                <Fragment>
                    <p>You have not yet setup a profile, please add some info</p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        Create Profile
                    </Link>
                </Fragment>
            )}
        </Fragment>
    );
};

DashboardComponent.propTypes = {
    token: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
});

export default connect(
    mapStateToProps,
)(DashboardComponent);