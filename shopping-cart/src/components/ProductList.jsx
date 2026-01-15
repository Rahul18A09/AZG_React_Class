import React from "react";
import ProductCard from "./ProductCard";

const Products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "HeadPhones", price: 100 },
  { id: 4, name: "KeyBoard", price: 70 },
  { id: 5, name: "Mouse", price: 250 },
];

const ProductList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {Products.map((p) => (
          <div key={p.id} className="col-md-3 mb-4"> 
          <ProductCard product={p}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
