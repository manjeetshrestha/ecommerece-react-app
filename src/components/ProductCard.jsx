export default function ProductCard(product){
    return(
        <div className="products-card products-card-1" key={product.id}>
              <img src={product.image}></img>
              <h2>{product.title}</h2>
              <h6>Rs {product.price}</h6>
              {/* <p>{product.description}</p> */}
              {/* <span>{product.id}</span> */}
         </div>
    );

    
}