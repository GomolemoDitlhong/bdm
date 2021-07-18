import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import About from "../components/About";
import Why from "../components/Why";
import Creative from "../components/Creative";

function Home() {
  return (
    <div className="Home">
      <Slider />
      <About />
      <Services />
      <Why />
      <Creative />
    </div>
  );
}

export default Home;
