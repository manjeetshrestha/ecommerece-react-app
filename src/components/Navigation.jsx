import React ,{ useState } from "react";
import "../index.css"
import { Outlet ,Link , useNavigate} from "react-router-dom";



export default function Navigation(props){
   
    const navigate = useNavigate();
    function logout(){
        
        localStorage.clear();
        navigate("/login");
    }

   

    return(
            <>
            <div className="page-container">
            <nav className="navbar">
                <div className="brand">
                    <h1>MeroStore</h1>
                </div>
                <div className="links">
                    <span>Carts<span className="carts-number">{Number(props.cartItems)}</span></span>
                    <Link to = "/products" >Products</Link>
                    <Link to = "/profile" >Profile</Link>
                    <button className="signout" onClick={logout}>Signout</button>
                </div>
            </nav>
            <Outlet />
            </div>
           
            </>
        );
    
    
}