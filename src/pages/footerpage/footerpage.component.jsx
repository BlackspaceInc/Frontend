import React from "react";
import  './footerpage.styles.scss';

import { SocialIcon } from 'react-social-icons';

const FooterPage = () => {
  return (

    <div className='blk-main-footer'>
      <div className='footer-content'>
        <div className='footer-section about'> 
          <h1 className='blk-logo-text'>
            BLKSPACE COMPANY
          </h1>
<<<<<<< HEAD
=======
          <h5><span>Connecting you to black-owned business</span></h5>
>>>>>>> 9f4ceb1164b9a57a4dc467929e55e2122f484ed9
          <div className='contact'>
            {/* <span><i className='fa fa-phone'></i> &nbsp; 000-000-0000</span> */}
            {/* <span><i className='fas fa-envelope'></i> Contacs us: blkspace2020@gmail.com </span> */}
          </div>
          <div className='socials'>
<<<<<<< HEAD
            <SocialIcon network="twitter" url='#' style={{ height: 25, width: 25, margin:5}} />
            <SocialIcon network="instagram" url='#' style={{ height: 25, width: 25, margin:5}} />
=======
            <SocialIcon network="twitter" url='https://twitter.com/therealblkspace/status/1282532400665227269?s=21' target='blank' style={{ height: 25, width: 25, margin:5}} />
            <SocialIcon network="instagram" url='https://www.instagram.com/theblkspaces/' target='blank' style={{ height: 25, width: 25, margin:5}} />
>>>>>>> 9f4ceb1164b9a57a4dc467929e55e2122f484ed9
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        &copy; BLKSPACE
      </div>
    </div>
<<<<<<< HEAD

=======
    
>>>>>>> 9f4ceb1164b9a57a4dc467929e55e2122f484ed9
  );
}

export default FooterPage;