import React from "react";
import '../css/styles.css';
import WidgetCart from "./WidgetCart.js";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const NavBar = () => {
    const cart = useContext(CartContext);
    return(
        <React.Fragment>
            <div className="main-div">
                <div className="space">
                    
                </div>
                <div className="links">
                    <Link to={`/categories/${1}`}>Placas de video</Link>
                    <Link to={`/categories/${2}`}>Motherboards</Link>
                    <Link to={`/categories/${3}`}>Microprocesadores</Link>
                    <Link to={`/categories/${4}`}>Memorias RAM</Link>
                    <Link to={`/categories/${5}`}>Fuentes</Link>
                </div>
                {cart.cantItems > 0 ? <Link to="/cart" className="cart"><WidgetCart cant="0"></WidgetCart></Link> : <></>}
                
            </div>
        </React.Fragment>
    );
}

export default NavBar;