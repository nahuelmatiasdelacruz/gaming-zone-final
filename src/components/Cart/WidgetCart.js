import React, { useContext } from "react";
import "../../css/styles.css";
import Carrito from "../../img/cart-icon.png";
import { CartContext } from "./CartContext";

const WidgetCart = () => {
    const cart = useContext(CartContext);
    return(
        <React.Fragment>
            <div className="cart">
                <img src={Carrito} alt="Carrito Logo"/>
                <div className="contadorCarrito" id="contCart">
                    {cart.cantItems}
                </div>
            </div>
        </React.Fragment>
    );
}

export default WidgetCart;