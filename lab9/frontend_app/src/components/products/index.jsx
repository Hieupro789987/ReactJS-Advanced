import React, { useState, useEffect } from "react";

import axios from "axios";

function Product(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001").then(function (data) {
      setProduct(data.data);
    });
  }, []);

  if(product) 
        console.log(product);
    else 
        return null;
  return (
    <>
      <h1>hello world</h1>
      {product.map((p) => (
        <li key={p.id}>
          {p.id} -{p.name} - {p.price}
        </li>
      ))}
    </>
  );
}

export default Product;
