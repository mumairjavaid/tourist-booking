import React from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offers from "./components/Offers"
import Plans from "./components/Plans"
import Rooms from "./components/Rooms"
import ImageSlider from "./components/ImageSlider"
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plans/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </>
  );
};

export default App;
