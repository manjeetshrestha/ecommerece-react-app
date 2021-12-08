import React, { useState, useEffect } from "react";
export default function useProductApi() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
}
