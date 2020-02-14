import React from "react";

const Product = props => {
  return (
    <div>
      <div>
        <button style={{ backgroundColor: "whitesmoke" }}>BUY</button>
        <span style={{ fontSize: "20px" }}>
          {" "}
          Product: {props.product.name} ${props.product.price}
        </span>
        <p>{props.product.description}</p>
        <br />
      </div>
    </div>
  );
};

export default Product;