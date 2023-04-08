import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services"
import About from "../components/About"
import InventoryRecord from "../components/InventoryRecord"

export default function Home(){
    return (
      <div>    
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Footer />
      </div>
    );
}