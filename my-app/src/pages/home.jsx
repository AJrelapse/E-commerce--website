import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Cards from "../components/cards";
import Cards2 from "../components/cards2";
import Cards3 from "../components/cards3";



function Home() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <hr/>
      <Cards/>
      <hr/>
      <Cards2 />
      <hr/>
      <Cards3 />
      <hr/>
      <Footer />
    </div>
  );
}

export default Home;
