import React from "react";
import { Link } from "react-router-dom";
import HomeFooter from "./SubContainer/HomeContainer/HomeFooter";
import HomeHeader from "./SubContainer/HomeContainer/HomeHeader";
import HomeSection from "./SubContainer/HomeContainer/HomeSection";
import HomeSlider from "./SubContainer/HomeContainer/HomeSlider";

function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeSlider />
      <HomeSection />
      <HomeFooter />

    
    </React.Fragment>
  );
}

export default Home;
