import React from "react";

function ProductsItem({ image, name, price }) {
  return (
    <div className="productsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default ProductsItem;