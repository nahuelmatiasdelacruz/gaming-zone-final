import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import "../../css/styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

const Item = (props) =>{
    const {id, title, stock, price, pictureUrl, Marca, Modelo} = props;
    const cart = useContext(CartContext);
    const onAdd = (qty) => {
        addItem(qty);
    }
    const addItem = (cant)=>{
        const itemToCart = {
            id: id,
            imgUrl: pictureUrl,
            price: price,
            detail: title + " " + Marca + " " + Modelo,
            cant: cant
        };
        cart.addToCart(itemToCart);
        cart.setCant(cant);
    }
    return(
        <React.Fragment>
            <div className="cart-item">
                <h2 className="item-name">{title}</h2>
                <div className="imagen-producto">
                    <Link to={`/item/${id}`}><img src={pictureUrl} alt="Imagen Producto"></img></Link>
                </div>
                <div className="detalles">
                    <h4>Precio: <span>${price}</span></h4>
                    <Link to={`/item/${id}`}/>
                </div>
                <div className="">
                    <ItemCount stock={stock} onAdd={onAdd}></ItemCount>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item;