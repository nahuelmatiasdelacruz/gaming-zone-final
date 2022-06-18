import React from "react";
import "../css/styles.css";
import { Link } from "react-router-dom";

const CartEmpty = ()=>{
    return(
        <React.Fragment>
            <div className="main-empty">
                <h3>El carrito está vacío</h3>
                <Link to="/" className="link">Ver productos disponibles</Link>
            </div>
        </React.Fragment>
    )
}

export default CartEmpty;