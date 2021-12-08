import React from "react";
import useProductApi from "./useProductsApi.jsx";
import ProductCard from "./ProductCard.jsx";

export default function Product() {
  const products = useProductApi();
  const productItems = products.map((product) => {
    <ProductCard product={product} key= {product.id} />
  });
  return (
    <>
      {productItems}
    </>
  );
}
