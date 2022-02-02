import React from "react";
import CheckOutFooter from "./SubContainer/CheckOutContainer/CheckOutFooter";
import CheckOutHeader from "./SubContainer/CheckOutContainer/CheckOutHeader";
import CheckOutSection from "./SubContainer/CheckOutContainer/CheckOutSection";

function CheckOut() {
  return (
    <div>
      <CheckOutHeader />
      <CheckOutSection />
      <CheckOutFooter />
    </div>
  );
}

export default CheckOut;
