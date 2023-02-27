var Home = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>Butterfly Bootstrap Template - Index</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Dosis:300,400,500,,600,700,700i|Lato:300,300i,400,400i,700,700i" rel="stylesheet" />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          <link href="assets/css/style.css" rel="stylesheet" />
          {/* =======================================================
    * Template Name: Butterfly - v4.10.0
    * Template URL: https://bootstrapmade.com/butterfly-free-bootstrap-theme/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
          {/* ======= Header ======= */}
          <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
              <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
              {/* Uncomment below if you prefer to use text as a logo */}
              {/* <h1 class="logo"><a href="index.html">Butterfly</a></h1> */}
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#services">Services</a></li>
                  <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                  <li><a className="nav-link scrollto" href="#team">Team</a></li>
                  <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>{/* .navbar */}
            </div>
          </header>{/* End Header */}
          {/* ======= Hero Section ======= */}
          <section id="hero" className="d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>Creating websites that make you stop &amp; stare</h1>
                  <h2>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</h2>
                  <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                  <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </section>{/* End Hero */}
          <main id="main">
            {/* ======= About Section ======= */}
            <section id="about" className="about">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4" />
                  </div>
                  <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                    <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                    <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-fingerprint" /></div>
                      <h4 className="title"><a href>Lorem Ipsum</a></h4>
                      <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-gift" /></div>
                      <h4 className="title"><a href>Nemo Enim</a></h4>
                      <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-atom" /></div>
                      <h4 className="title"><a href>Dine Pad</a></h4>
                      <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End About Section */}
           
            
            {/* ======= Gallery Section ======= */}
            <section id="gallery" className="gallery">
              <div className="container">
                <div className="section-title">
                  <h2>Gallery</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-1.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-2.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-3.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-4.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-5.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-6.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-7.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-8.jpg" className="galleery-lightbox" data-gallery="gallery-item">
                        <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Gallery Section */}
        
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="footer-newsletter">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form action method="post">
                      <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>Butterfly</h3>
                    <p>
                      A108 Adam Street <br />
                      New York, NY 535022<br />
                      United States <br /><br />
                      <strong>Phone:</strong> +1 5589 55488 55<br />
                      <strong>Email:</strong> info@example.com<br />
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                      <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Social Networks</h4>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                      <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                      <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                      <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                      <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
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
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/butterfly-free-bootstrap-theme/ */}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
    }
  });

export default Home