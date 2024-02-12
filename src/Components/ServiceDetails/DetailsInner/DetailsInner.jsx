import React from "react";
import "./DetailsInner.css";
const DetailsInner = ({ text }) => {
  return (
    <div className="detailsInner">
      <p> {text}</p>
    </div>
  );
};

export default DetailsInner;
