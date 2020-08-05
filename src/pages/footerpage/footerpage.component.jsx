import React from "react";
import  './footerpage.styles.scss';
import { SocialIcon } from 'react-social-icons';

const FooterPage = () => {
  return (

    <div className='blk-main-footer'>
      <div className='footer-content'>
        <div className='footer-section about'> 
          <h1 className='blk-logo-text'>
            BlkSpace Company
          </h1>
          <div className='contact'>
            {/* <span><i className='fa fa-phone'></i> &nbsp; 000-000-0000</span>
            <span><i className='fas fa-envelope'></i>&nbsp; fake@doe.com</span> */}
          </div>
          <div className='socials'>
            <SocialIcon network="twitter" url='#' style={{ height: 25, width: 25, margin:5}} />
            <SocialIcon network="instagram" url='#' style={{ height: 25, width: 25, margin:5}} />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        &copy; BlkSpace 
      </div>
    </div>

  );
}

export default FooterPage;