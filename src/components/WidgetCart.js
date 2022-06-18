import React from "react";
import '../css/styles.css';
import Carrito from "../img/cart-icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const WidgetCart = () => {
    const cart = useContext(CartContext);
    return(
        <React.Fragment>
            <div className="cart">
                <Link to="/cart"><img src={Carrito} alt="Carrito Logo"/></Link>
                <div className="contadorCarrito" id="contCart">
                    {cart.cantItems}
                </div>
            </div>
        </React.Fragment>
    );
}

export default WidgetCart;