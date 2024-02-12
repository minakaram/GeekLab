import React from "react";
import "./Split.css";
import DropDown from "./DropDown/DropDown";

const Split = () => {
  const industryOptions = ["Health Care", "Beauty Care", "Body Care", "Gym"];
  const MarketOptions = ["Large-cap", "Medium-cap", "Small-cap"];
  const riskOptions =["low-risk",'high-risk','medium-risk','option-text-here']
  return (
    <div className="split-container">
      <h3>Filters</h3>
      <DropDown
        header="Industry"
        options={industryOptions}
        message="Choose something."
      />
      <DropDown
        header="Market cap"
        options={MarketOptions}
        message="Press Apply to see changes."
      />
      <DropDown
        header="Risk"
        options={riskOptions}
        message=""
      />

      <button>Apply Filters</button>
    </div>
  );
};

export default Split;
