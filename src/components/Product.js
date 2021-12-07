import React from "react";
import useProductApi from "./useProductsApi.js";

export default function Product() {
  const products = useProductApi();
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <div class="products-card products-card-1">
              <img src={product.image}></img>
              <h2>{product.title}</h2>
              <h6>Rs {product.price}</h6>
              {/* <p>{product.description}</p> */}
              {/* <span>{product.id}</span> */}
            </div>
          </>
        );
      })}
    </>
  );
}
