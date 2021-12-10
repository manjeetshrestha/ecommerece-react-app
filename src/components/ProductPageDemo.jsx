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
    const controller = new AbortController();
    getProducts();
    return controller.abort();
      
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


