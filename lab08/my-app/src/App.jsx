import "./App.css";
import React, {useState} from "react";
import Products from "./components/products"
import { ref, child, get, set, update } from "firebase/database";
import { db } from "./utils/firebase-connect";

function App() {
  const [data, setData] = useState([]);
  
  function onAddProduct() {
    let arr = []
    let a =  arr.push(
      {
        name: 'iphoneXX',
        price : 1200,
        brand: 'iphone',
        category: 'mobile'
      }
    )
    setData(a);
    set(ref(db, 'products'), a )
  }

  return (
    <div className="App">
      <h1>Danh Sách Các Sản Phẩm</h1>
      <button className="btnAdd" onClick={() => {onAddProduct()}}>Add</button>
     <div className="container">
      {/* <Products /> */}
     </div>
    </div>
  );
}

export default App;
