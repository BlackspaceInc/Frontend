import React from "react";
import  './footerpage.styles.scss';
import FormInput from '../../components/form-input/form-input.component';


import { SocialIcon } from 'react-social-icons';

const FooterPage = () => {
  return (

    <div className='blk-main-footer'>
      <div className='footer-content'>
        <div className='footer-section about'> 
          <h1 className='blk-logo-text'>
            BLKSPACE COMPANY
          </h1>
          <h5><span>Connecting you to black-owned business</span></h5>
          <div className='contact'>
            {/* <span><i className='fa fa-phone'></i> &nbsp; 000-000-0000</span> */}
            <span><i className='fas fa-envelope'></i> Contacs us: blkspace2020@gmail.com </span>
          </div>
          <div className='socials'>
            <SocialIcon network="twitter" url='https://twitter.com/therealblkspace/status/1282532400665227269?s=21' style={{ height: 25, width: 25, margin:5}} />
            <SocialIcon network="instagram" url='https://www.instagram.com/theblkspaces/' style={{ height: 25, width: 25, margin:5}} />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        &copy; BLKSPACE
      </div>
    </div>
    
  );
}

export default FooterPage;