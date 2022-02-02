import React from "react";
import ShopAddvertisment from "./SubContainer/ShopContainer/ShopAddvertisment";
import ShopFooter from "./SubContainer/ShopContainer/ShopFooter";
import ShopHeader from "./SubContainer/ShopContainer/ShopHeader";
import Shopsection from "./SubContainer/ShopContainer/Shopsection";

function Shop() {
  return (
    <div>
      <ShopHeader />
      <Shopsection />
      <ShopAddvertisment />
      <ShopFooter />
    </div>
  );
}

export default Shop;
