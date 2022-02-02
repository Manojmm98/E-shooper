import React, { useState, useEffect } from "react";
import axios from "axios";

function Blazzer() {
  const [blazzers, setBrazzers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      let response = await axios.get("Brazzers.json");
      let data = response.data;
      setBrazzers(data);
    } catch (error) {
      setError(error.message);
    }
  });

  return (
    <div>
      <div className="tab-pane fade" id="blazers">
        {blazzers.map((tshirt) => (
          <div className="tab-pane fade active in" id="brazzers">
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
      </div>
    </div>
  );
}

export default Blazzer;
