import React from 'react';

import FooterPage from '../../pages/footerpage/footerpage.component';
import './homepage.styles.scss';
import BusinessDirectory from '../../components/business-directory/business-directory.component';


const HomePage = () => (
    //This contains the BusinessDirectory component, comprised of other components
    // and giving us access to the list of businesses
    <div className='homepage'> 
        <BusinessDirectory/>  
    </div>
);

export default HomePage;