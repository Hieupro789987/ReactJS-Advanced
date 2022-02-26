import React, { useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";
import { db } from "../../utils/firebase-connect";
import './style.css';



function Products() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, "products")).then((data) => {
      if (data.exists()) {
        setProduct(data.val());
      } else {
        console.log("errr");
      }
    });
  }, []);

  if(product) {
    console.log(product.length)
  }
  else {
    return null
  }
  return (
    <div className="group">
      {
          product.map((e, i) => (
            <div className="card" key={i}>
                <h2>{e.name}</h2>
                <span>{e.price} - </span>
                <span>{e.brand} - </span>
                <span>{e.category}</span>
                <a className="button">edit</a>
            </div>
          ))
      }
     
    </div>
  );
}

 export default Products;
