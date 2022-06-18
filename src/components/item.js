import React from "react";
import ItemCount from "./ItemCount";
import "../css/styles.css";
import p1 from "../img/p1.jpg";
import { Link } from "react-router-dom";

const Item = (props) =>{
    const onAdd = (qty) =>{
        alert("Has seleccionado " + qty + " items");
    }
    const {id, title, price, pictureUrl, stock} = props;
    return(
        <React.Fragment>
            <div className="cart-item">
                <h2 className="item-name">{title}</h2>
                <div className="imagen-producto">
                    <Link to={`/item/${id}`}><img src={p1} alt="Imagen Producto"></img></Link>
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