import React, { useState, useEffect } from "react";

// api to get products 
function useProductApi() {
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

// function to render the UI by passing the data received through the api
function ProductCard(props){
    console.log("product card rendered");
    return(
        <div className="products-card products-card-1">
            <img src={props.product.image}></img>
            <div className="product-information">
                <h2>{props.product.title}</h2>
                <h6>$ {props.product.price}</h6>
            </div>
            
            <button>View Details</button>
            {/* <p>{product.description}</p> */}
            {/* <span>{product.id}</span> */}
        </div>
    );
} 


// function to map thorugh the data received through the api 
export default function ProductPageDemo(){
    const products = useProductApi();
    const productItems = products.map((product) => {

    return <ProductCard product={product} key= {product.id} />
  });   

  return(

      <div className="products-container">
        {productItems}
        
      </div>
    
  );
}


