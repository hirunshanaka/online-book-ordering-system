import React from 'react';
import fb from '../../assets/fb.png'; // Corrected path
import instagram from '../../assets/instagram.png'; // Corrected path
import twitter from '../../assets/twitter.png'; // Corrected path
import whatsapp from '../../assets/whatsapp.png'; // Corrected path

import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links-div'>
         
         <h4 style={{color:"white"}}> <b>Buy Bookz online shop</b></h4>
         <br />
          <div style={{color:"white"}} >
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/Login">
             <p>Login</p>
              </a>
            <a href="/Register">
             <p>Register</p>
            </a>
            </div>
          </div>        
          <div className='sb_footer-links-div'>
            
            <h4 style={{color:"white"}}> <b> Follow Us :</b></h4>
            <br />
            <div className='socialmedia'>
              <p><a href=""><img src={fb} alt="Facebook" /></a></p> 
              <p><a href=""><img src={instagram} alt="instagram" /></a></p> 
              <p><a href=""><img src={twitter} alt="twitter" /></a></p> 
              <p><a href=""><img src={whatsapp} alt="whatsapp" /></a></p>

            </div>
          </div>
        </div>
        
        <hr />
       
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>
            <p style={{color:"yellow"}}>
              @{new Date().getFullYear()} Buy Bookz online shop 
            </p>
          </div>
          <div className='sb_footer-below-links'>
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy Policy</p></div></a>
            <a href="/cookies"><div><p>Cookies Policy</p></div></a>
            <a href="/contact"><div><p>Contact Us</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
