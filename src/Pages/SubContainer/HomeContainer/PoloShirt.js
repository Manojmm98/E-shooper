import React, { useState, useEffect } from "react";
import axios from "axios";

function PoloShirt() {
  let [poloshirt, setpoloshirt] = useState([]);

  useEffect(async () => {
    let response = await axios.get("poloshirt.json");
    let data = await response.data;

    setpoloshirt(data);
  });

  return (
    <>
      {poloshirt.map((tshirt) => (
        <div className="tab-pane fade active in" id="poloshirt">
          <div className="col-sm-3">
            <div className="product-image-wrapper">
              <div className="single-products" key={tshirt.id}>
                <div className="productinfo text-center">
                  <img src={tshirt.source} alt="" />
                  <h2>{tshirt.price}</h2>
                  <p>{tshirt.title}</p>
                  <a href="#" className="btn btn-default add-to-cart">
                    <i className="fa fa-shopping-cart"></i>Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PoloShirt;
