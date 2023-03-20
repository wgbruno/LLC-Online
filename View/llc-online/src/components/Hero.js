import React, { Component } from 'react'; 

export default function Hero(){
        return (
            <div>
            {/* ======= Hero Section ======= */}
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center text-center">
                        <h1>The Language Learning Center Online</h1>
                        {/*<p>The Language Learning Center is a multimedia resource center dedicated to supporting language, 
                            literature, and cultural studies at Loyola. 
                            Our facilities include a state of the art computer lab, two video viewing rooms, 
                            an extensive foreign language film collection, and a comfortable reading room perfect 
                            for independent study as well as group projects. The LLC, along with its friendly staff, 
                            serves as the technology hub for the Department of Modern Languages and Literatures, 
                            providing both the equipment and support to bring language studies to life 
                            using the latest technology.</p>*/}
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={require("../assets/rsz_standard.jpg")} className="img-fluid" alt="" />
                    </div>
                    </div>
                </div>
            {/* End Hero */}
            </div>
    )
}