import React /*,  { useState, useEffect } */ from "react";
import Image from "material-ui-image";
// import SliderImage from "./SliderImage";
import image1 from "../images/mining1.jpg";
// import image2 from "../images/dumper-2129356_1920.jpg";
// import image3 from "../images/industry-2023592_1920.jpg";

function Slider() {
  return (
    <div>
      <Image src={image1} aspectRatio={16 / 11} />
    </div>
  );
}

export default Slider;
