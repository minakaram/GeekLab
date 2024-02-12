import React from "react";
import "./DetailsHeader.css";
import spliter from "../Assets/Line 10.svg";
import img1 from "../Assets/ticker1.svg";
import img2 from "../Assets/contract1.svg";
import img3 from "../Assets/volume1.svg";
import img4 from "../Assets/risk1.svg";
const DetailsHeader = () => {
  return (
    <div className="detailsHeader">
      <div className="row w-100">
        <div className="col-md-3 service-header-item p-0 tesla">
          <img src={img1} alt="" className="headerShape mx-1" />
          <small>$TSLA</small>
          <img src={spliter} alt="" className="details-spliter" />
        </div>
        <div className="col-md-4 service-header-item p-0">
          <img src={img2} alt="" className="headerShape mx-2" />
          <small>200 Contracts</small>
          <img src={spliter} alt="" className="details-spliter del" />
        </div>
        <div className="col-md-3 service-header-item p-0">
          <img src={img3} alt="" className="headerShape mx-2" />
          <small>12.2%</small>
          <img src={spliter} alt="" className="details-spliter" />
        </div>
        <div className="col-md-2 service-header-item p-0 risk">
          <img src={img4} alt="" className="headerShape mx-2" />
          <small>High risk</small>
        </div>
      </div>
      <p className="px-2 my-4">
        Someone Just bought xxxx contracts of $XYZ, this is notable because the
        relative volume on this options trade is X.X%.
      </p>
    </div>
  );
};

export default DetailsHeader;
