import React, { useContext }  from "react";
import DeleteProduct from "../../img/delete-icon.png";
import { CartContext } from "./CartContext";

const CartItem = (props)=>{
    const {detail, id, price, img, cant} = props;
    const cart = useContext(CartContext);
    return(
        <React.Fragment>
            <div className="cart-content-item">
                <img src={img} alt="Imagen Producto"/>
                <h4 className="detail-prod">{detail}</h4>
                <h5 className="cant-prod"><span>Cantidad: </span>{cant} </h5>
                <h5 className="price-prod"> ${price}</h5>
                <div className="delete-icon">
                    <button onClick={()=>{cart.deleteItem(id)}}><img src={DeleteProduct} alt="borrar-prod"/></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartItem;