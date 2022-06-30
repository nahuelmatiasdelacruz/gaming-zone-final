import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

const ItemDetail = (props) =>{
    const {item, id} = props;
    const [itemCount,setItemCount] = useState(0);
    const cart = useContext(CartContext);
    const onAdd = (qty) => {
        setItemCount(qty);
        addItem(qty,item);
    }
    const addItem = (cant,obj)=>{
        const itemToCart = {
            id: id,
            imgUrl: obj.pictureUrl,
            price: obj.price,
            detail: obj.title + " " + obj.Marca + " " + obj.Modelo,
            cant: cant
        };
        cart.addToCart(itemToCart);
        cart.setCant(cant);
    }
    return(
        <React.Fragment>
            <div className="item-detail">
                <div className="img-detail">
                    <img src={item.pictureUrl} alt="Imagen Producto"></img>
                </div>
                <div className="description-detail">
                    <h2>{item.title}</h2>
                    <p>{item.productDetail}</p>
                    <h3>Precio: $ <span>{item.price} </span></h3>
                    {itemCount === 0 ? <ItemCount stock={item.stock} onAdd={onAdd}></ItemCount> : <Link to="/cart"><button className="add-to-cart">Terminar mi compra</button></Link>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ItemDetail;