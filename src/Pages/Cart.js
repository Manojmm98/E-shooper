import React from "react";
import CartFooter from "./SubContainer/CartContainer/CartFooter";
import CartHeader from "./SubContainer/CartContainer/CartHeader";
import CartSection from "./SubContainer/CartContainer/CartSection";

function Cart() {
  return (
    <div>
      <CartHeader />

      <CartSection />
      <CartFooter />
    </div>
  );
}

export default Cart;
