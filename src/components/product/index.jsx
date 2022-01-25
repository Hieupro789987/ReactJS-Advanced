import React, { useState, useEffect } from "react";

const Product = (props) => {
  const [product, setProduct] = useState(["hieu", "nam"]);
  let prod = "";
  function handleChange(e) {
    prod = e.target.value;
    console.log(prod);
  }

  useEffect(() => {
    document.title = product[product.length - 1]; 
  });
  

  return (
    <div>
      <h1>List of Product</h1>
      <input type="text" name="name" id="name" onChange={handleChange} />
      <button
        onClick={() => {
          let newProd = [...product];
          newProd.push(prod);
          setProduct(newProd);
        }}
      >
        add products
      </button>

      <ul>
        {product.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
};
export default Product;
