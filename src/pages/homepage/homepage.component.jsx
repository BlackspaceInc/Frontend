import React from 'react';

import FooterPage from '../../pages/footerpage/footerpage.component';
import './homepage.styles.scss';
import BusinessDirectory from '../../components/business-directory/business-directory.component';


const HomePage = () => (
    //This is the directory for blackspace
    <div className='homepage'> 
    {/* this section has a list of 4 categories of businesses */}
        {/* <div className='categories'>add popular categories here</div> */}
        {/* <SearchBar/> */}
        <BusinessDirectory/>  
        {/* <CompanyDirectory /> */}
        {/* <div className='other options'> space for more product seelctions </div> */}
        <FooterPage/>
    </div>
);

export default HomePage;