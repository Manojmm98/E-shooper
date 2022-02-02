import React, { useState, useEffect } from "react";
import axios from "axios";

function Kids() {
  const [kids, setKids] = useState([]);

  useEffect(() => {
    let response = await axios.get("kids.json");
    let data = await response.data;
    setKids(data);
  }, []);

  return (
    <>
      {kids.map((tshirt) => (
        <div className="tab-pane fade active in" id="kids">
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

export default Kids;
