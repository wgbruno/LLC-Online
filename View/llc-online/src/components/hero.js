import React, { Component } from 'react'; 

export default function Hero(){
        return (
            <div>
            {/* ======= Hero Section ======= */}
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>The Language Learning Center Online</h1>
                        <h2>Insert phrase here about the LLC</h2>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
                    </div>
                    </div>
                </div>
            {/* End Hero */}
            </div>
    )
}