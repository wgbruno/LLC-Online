import React from 'react'; 

export default function Gallery(){
    return (
        <div>
        {/* ======= Gallery Section ======= */}
      <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p></p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/all-groups-B2.jpg")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/all-groups-B2.jpg")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/crepes 1.jpg")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/crepes 1.jpg")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/Copy of Student of the Month poster.png")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/Copy of Student of the Month poster.png")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/Untitled design.png")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/Untitled design.png")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/LEAP 2.jpg")}className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/LEAP 2.jpg")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/Composition Workshop.png")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/Composition Workshop.png")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/LLC Staff pick movie nights.png")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/LLC Staff pick movie nights.png")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href={require("../assets/Teatime3.jpg")} className="galleery-lightbox" data-gallery="gallery-item">
                <img src={require("../assets/Teatime3.jpg")} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}