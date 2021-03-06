import React from 'react'
import Item from './item'
import "../../css/styles.css";

const ItemList = (props) => {
    const {productList} = props;
    return (
        <React.Fragment>
              {productList.map((producto) =><Item Marca={producto.Marca} Modelo={producto.Modelo} id={producto.id} title={producto.title} stock={producto.stock} key={producto.id} price={producto.price} pictureUrl={producto.pictureUrl} />)}
        </React.Fragment>
    )
  }

export default ItemList;
