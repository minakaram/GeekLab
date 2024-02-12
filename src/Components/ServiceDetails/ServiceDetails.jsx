import React from "react";
import "./ServiceDetails.css";

import DetailsHeader from "./DetailsHeader/DetailsHeader";
import DetailsInner from "./DetailsInner/DetailsInner";
function ServiceDetails() {
  return (
    <div className="serviceDetails">
      <DetailsHeader />
      <DetailsInner text="X company released a short report on $XYZ, High IV option sales opps" />
      <DetailsInner text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails." />
      <DetailsInner text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails." />
      <DetailsInner text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails." />
      <DetailsInner text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails." />
      <DetailsInner text="$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails." />
    </div>
  );
}

export default ServiceDetails;
