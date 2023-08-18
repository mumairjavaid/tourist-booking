import React from "react";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offers from "./components/Offers"
import Plans from "./components/Plans"
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plans/>
    </>
  );
};

export default App;
