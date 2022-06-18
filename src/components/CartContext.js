import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([]);
    const [cantItems, setCantItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartOrder, setCartOrder] = useState({});
    const [orderConfirmed,setOrderConfirmed] = useState({});
    const [orderId,setOrderId] = useState("");
    const addToCart = (item)=> {
        if(cartList.length<1){
            setCartList([...cartList,item]);
            setTotalPrice(parseInt(item.price)*item.cant);
        }else{
            if(isInCart(item.id)){
                const aux = cartList.findIndex(obj=>obj.id===item.id);
                cartList[aux].cant += item.cant;
                setCantItems(cantItems+item.cant);
                setTotalPrice(totalPrice + (parseInt(item.price)*item.cant));
            }else{
                setCartList([...cartList,item]);
                setTotalPrice(totalPrice + (parseInt(item.price)*item.cant));
            }
        }
    }
    const setCant = (cant)=>{
        setCantItems(cantItems+cant);
    }
    const isInCart=(id)=>{
        if(cartList.some((element)=>element.id===id)){
            return true;
        }else{
            return false;
        }
    }
    const deleteItem=(id)=>{
        const deletedItem = cartList.filter(obj=>obj.id===id);
        setCantItems(cantItems-deletedItem[0].cant);
        setTotalPrice(totalPrice - (parseInt(deletedItem[0].price)*deletedItem[0].cant));
        const aux = cartList.filter(obj=>obj.id!==id);
        setCartList(aux);
    }
    const clear = ()=>{
        setCartList([]);
        setCantItems(0);
        setTotalPrice(0);
        setCartOrder({});
        setOrderConfirmed({});
        setOrderId("");
    }
    return(
        <CartContext.Provider value={{orderId,setOrderId,orderConfirmed,setOrderConfirmed,cartOrder,setCartOrder,cartList,addToCart, clear, deleteItem, cantItems, setCant, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;