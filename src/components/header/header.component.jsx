import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    //add sign in and sign up functionality and link 
    <div className='header'>
        <Link className='logo-container' to="/">
            <div className='logo'> our logo here </div>
        </Link>
        <div className='options'>
            <Link className='option' to='/signin'>
             SIGN IN
            </Link>
            <Link className='option' to='/companies'>
             BLACK COMPANIES
            </Link>
            <Link className='option' to='/contact'>
             CONTACT
            </Link>
            <Link className='option' to='/story'>
             OUR STORY
            </Link>
            
        </div>
    </div>
);


export default Header;