import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../css/styles.css";

const Cart = ()=>{
    const test = useContext(CartContext);
    if(test.orderId!==""){
        test.clear();
    }
    return(
        <React.Fragment>
            <div className="carrito">
                {test.cartList.length!==0 ? <h2 className="cart-title">Tu carrito</h2> : <></>}
                <div className="contenido-carrito">
                    {test.cartList.length === 0 ? <CartEmpty/> : 
                        test.cartList.map((item)=><CartItem img={item.img} detail={item.detail} price={item.price} id={item.id} key={item.id} cant={item.cant}/>)
                    }
                    {test.cartList.length === 0 ? 
                        <></> :
                        <div className="cart-content-item final-detail">
                            <h1 className="detalle-de-carrito">Detalle de tu <span>carrito</span></h1>
                            <h4 className="detail-prod">Total de productos: {test.cantItems}</h4>
                            <h5 className="cant-prod"><span>Precio final (Incluye impuestos): $ </span>{test.totalPrice}</h5>
                            <Link className="finish-buying" to="/order">Terminar compra</Link>
                        </div>
                    }
                </div>
                {test.cartList.length!==0 ? <button className="add-to-cart center" onClick={test.clear}>Vaciar carrito</button> : <></>}
            </div>
        </React.Fragment>
    )
}

export default Cart;