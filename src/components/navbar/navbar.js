import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import blklogo from '../../assets/logo.ico';
import './navbar.styles.scss';

/**
 * Navigation Bar Function Component
 * 
 * @param {any} { auth: { isAuthenticated, loading }, logout } 
 * @returns 
 */
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Companies</Link>
            </li>
            <li>
                <Link to='/posts'>Platform</Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fas fa-user' />{' '}
                    <span className='hide-sm'>Profile</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Consumers</Link>
            </li>
            <li>
                <Link to='/profiles'>Businesses</Link>
            </li>
            <li>
                <Link to='/about-us'>About Us</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar'>
            <Link className='blk-logo-container' to='/'>
            <img className='logo' src={blklogo} alt='blackpsace logo'/>
            </Link>

            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Navbar);