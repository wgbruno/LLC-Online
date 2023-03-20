import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services"

export default function Home(){
    return (
      <div>    
          <Hero />
          <Services />
          <Gallery />
          <Footer />
      </div>
    );
}