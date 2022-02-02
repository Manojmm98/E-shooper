import React, { useState, useEffect } from "react";
import axios from "axios";

function Tshirt() {
  const [tshirt, setTshirt] = useState([]);

  useEffect(async () => {
    let response = await axios.get("tshirt.json");
    let data = await response.data;
    setTshirt(data);
    console.log(data);
  }, []);

  return (
    <>
      {tshirt.map((tshirt) => (
        <div className="tab-pane fade active in" id="tshirt">
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

export default Tshirt;
