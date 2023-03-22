import React from "react"

export default function About() {
    return(
      <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
            <a href="https://www.youtube.com/watch?v=gyMNfwfMXpQ" className="glightbox play-btn mb-4" />
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h2>About the LLC</h2>
            <p>Here is a short video describing student experience at the Language Learning Center.</p>
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
    </section>
    )
}