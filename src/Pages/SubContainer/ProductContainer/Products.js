import React, { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState();

  useEffect(async () => {
    let response = await axios.get("data.json");
    let data = await response.data;
    console.log(data);
    setproducts(data);
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.source}></img>
          <h1>{product.title}</h1>
        </li>
      ))}
    </ul>
  );
}

export default Products;
