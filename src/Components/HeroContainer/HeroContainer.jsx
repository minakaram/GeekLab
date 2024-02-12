import React from "react";
import Split from "../Split/Split";
import "./HeroContainer.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
const HeroContainer = () => {
  return (
    <div className="hero-container">
      <Split />
      <ServiceDetails />
    </div>
  );
};

export default HeroContainer;
