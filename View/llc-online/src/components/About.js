import React from "react"

export default function About() {
    return(
      <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch position-relative"/*after justify video-box*/> 
            <a href="https://www.youtube.com/watch?v=gyMNfwfMXpQ" className="glightbox play-btn mb-4" />
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h2>About the LLC</h2>
            <p>Here is a short video describing student experience at the Language Learning Center.</p>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-fingerprint" /></div>
              <h4 className="title"><a href>Video Viewing Rooms</a></h4>
              <p className="description">Explore the Video Viewing Rooms that are available to view any film we offer at the LLC</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-gift" /></div>
              <h4 className="title"><a href>Reading Room</a></h4>
              <p className="description">Study, play a game, or relax in the quiet reading room</p>
            </div>
            <div className="icon-box">
              <div className="icon"><i className="bx bx-atom" /></div>
              <h4 className="title"><a href>Video Editing Room</a></h4>
              <p className="description">Watch a film or use the computers in this quiet, isolated area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}