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
          <p> Lorem ipsum dolor, sit amet</p>
          <div className='contact'>
            {/* <span><i className='fa fa-phone'></i> &nbsp; 000-000-0000</span>
            <span><i className='fas fa-envelope'></i>&nbsp; fake@doe.com</span> */}
          </div>
          <div className='socials'>
            <SocialIcon network="twitter" url='#' style={{ height: 25, width: 25, margin:5}} />
            <SocialIcon network="instagram" url='#' style={{ height: 25, width: 25, margin:5}} />
            <SocialIcon network="facebook" url='#' style={{ height: 25, width: 25, margin:5 }} />
            <SocialIcon network="linkedin" url='#' style={{ height: 25, width: 25, margin:5 }} />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        &copy; BlkSpace 
      </div>
    </div>
    // <MDBFooter color="blue" className="font-small pt-4 mt-4 ">
    //   <MDBContainer fluid className="text-center text-md-left">
    //     <MDBRow>
    //       <MDBCol md="6">
    //         <h5 className="title">Footer Content</h5>
    //         <p>
    //           Here you can use rows and columns here to organize your footer
    //           content.
    //         </p>
    //       </MDBCol>
    //       <MDBCol md="6">
    //         <h5 className="title">Links</h5>
    //         <ul>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 1</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 2</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 3</a>
    //           </li>
    //           <li className="list-unstyled">
    //             <a href="#!">Link 4</a>
    //           </li>
    //         </ul>
    //       </MDBCol>
    //     </MDBRow>
    //   </MDBContainer>
    //   <div className="footer-copyright text-center py-3">
    //     <MDBContainer fluid>
    //       &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
    //       <p>social media links</p>
    //     </MDBContainer>
    //   </div>
    // </MDBFooter>
  );
}

export default FooterPage;