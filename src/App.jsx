import React from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offers from "./components/Offers"
import Plans from "./components/Plans"
import Rooms from "./components/Rooms"
import ImageSlider from "./components/ImageSlider"
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plans/>
      <Rooms/>
      <ImageSlider/>
    </>
  );
};

export default App;
