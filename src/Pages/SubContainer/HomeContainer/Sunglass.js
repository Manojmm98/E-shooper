import React, { useState, useEffect } from "react";
import axios from "axios";

function Sunglass() {
  let [sunglass, setSunglass] = useState([]);

  useEffect(async () => {
    let response = await axios.get("sunglass.json");
    let data = response.data;
    setSunglass(data);
  }, []);

  return (
    <>
      {sunglass.map((tshirt) => (
        <div className="tab-pane fade active in" id="sunglass">
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

export default Sunglass;
