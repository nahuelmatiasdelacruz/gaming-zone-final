import React from "react";
import { useState } from "react";
import '../css/styles.css';

const ItemCount = (props) => {
    const {stock,onAdd} = props;
    const [cant,setCant] = useState(1);
    const increment=()=>{
        if(cant<stock){
            setCant(cant+1);
        } 
    }
    const decrement=()=>{
        if(cant>1){
            setCant(cant-1);
        }
    }
    const click = () =>{
        if(stock>0){
            onAdd(cant);
        }
    }
    return(
        <React.Fragment>
            <div className="set-cant">
                <div className="cant">
                    <button className="button-as" onClick={increment}>+</button>
                    <p><span>{cant}</span></p>
                    <button className="button-as" onClick={decrement}>-</button>
                </div>
                <div className="add-cart">
                    <button className="add-to-cart" onClick={click}>Añadir al carrito</button>

                </div>
            </div>
        </React.Fragment>
    );
}

export default ItemCount;