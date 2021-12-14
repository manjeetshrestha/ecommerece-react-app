import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

// api to get products

function sortProductBy(products, sort) {
  if (sort === "0") {
    return products;
  } else if (sort === "1") {
    return products.slice().sort(function (a, b) {
      return b.price - a.price;
    });
    // console.log(products);
  } else if (sort === "2") {
    return products.slice().sort(function (a, b) {
      return a.price - b.price;
    });
  }
}

function useProductApi() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3002/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    // const controller z= new AbortController();
    getProducts();
    // return controller.abort();
  }, []);

  return products;
}

// function to render the UI by passing the data received through the api
function ProductCard(props) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleIncrement = () => {
    setCartItems(cartItems + 1);
  };

  console.log("product card rendered");
  return (
    <div className="products-card products-card-1">
      <img src={props.product.image}></img>
      <div className="product-information">
        <div className="product-title">
          <h2>{props.product.title}</h2>
        </div>

        <div className="product-price">
          <h6>Price</h6>
          <h6>$ {props.product.price}</h6>
        </div>

        <div className="product-rating">
          <h6>Rating</h6>
          <h6>{props.product.rating.rate}</h6>
        </div>
      </div>
      <div className="cta-buttons">
        <button>View Details</button>
        <button className="atc" onClick={handleIncrement}>
          Add To Cart
        </button>
      </div>

      {/* <p>{product.description}</p> */}
      {/* <span>{product.id}</span> */}
    </div>
  );
}

function SortComponent(props) {
  return (
    <>
      <menu className="filter-component">
        <label>
          Sort by
          <select defaultValue="0" onChange={props.handleSort}>
            <option value="0">All</option>
            <option value="1">Price High to Low</option>
            <option value="2">Price Low to High</option>
          </select>
        </label>
      </menu>
    </>
  );
}

// function to map thorugh the data received through the api
export default function ProductPageDemo({ handleIncrement }) {
  let products = useProductApi();
  // let sortedProducts = products;
  // let productsInitial = useProductApi();
  const [sort, setSort] = useState("0");
  const handleSort = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  // 1 = High to low = Descending sort
  // 2 = Low to high = Ascending sort

  const productItems = sortProductBy(products, sort).map((product) => {
    return (
      <ProductCard
        product={product}
        key={product.id}
        handleIncrement={handleIncrement}
      />
    );
  });

  return (
    <>
      <SortComponent handleSort={handleSort} />
      <div className="products-container">{productItems}</div>
    </>
  );
}
