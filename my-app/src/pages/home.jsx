import React from "react";
import "../styles/App.css";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Cards from "../components/cards";
import Cards2 from "../components/cards2";
import Cards3 from "../components/cards3";
import { PRODUCTS } from "../products";


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
      <h3 >
        All New <span><b classNameName="red_txt">iPhone Lineup</b></span>
      </h3>
      <div className="card-cont-1">
      {PRODUCTS.map((product) => (
          <Cards3 data={product} />
        ))}
        </div>
      <hr/>
      <Footer />
    </div>

  );
}

export default Home;
