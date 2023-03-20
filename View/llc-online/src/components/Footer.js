import React from 'react'; 
import { SocialIcon } from 'react-social-icons';

export default function Footer(){
    return (
        <div>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>LLC</h3>
                  <p>
                    Maryland Hall 443 <br />
                    Loyola University Maryland<br />
                    Baltimore MD 21210 <br /><br />
                    <strong>Phone:</strong> 410-617-2674<br />
                    <strong>Email:</strong> loyolallc@loyola.edu<br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="/">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="/login">Login</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Calendar</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Inventory</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  </ul>
                </div>
                {/*<div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>*/}
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                  {/*<p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>*/}
                  <div className="social-links mt-3">
                    <SocialIcon url="https://twitter.com/LoCo_LLC" />
                    <SocialIcon url="https://www.instagram.com/loyolallc/" />
                    {/*<a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4">
            <div className="copyright">
              © Copyright <strong><span>Butterfly</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version. */
              Licensing information: https://bootstrapmade.com/license/ */
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/butterfly-free-bootstrap-theme/
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>{/* End Footer */}
      </div>
    )

}


