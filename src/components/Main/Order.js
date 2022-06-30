import React, { useState, useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "firebase/firestore";
import { Link } from "react-router-dom";
import { doc,collection, addDoc, updateDoc, getDoc } from "firebase/firestore";
import db from "../../firebaseConfig";

const Order =()=>{
    const cart = useContext(CartContext);
    const [orderId,setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const isUserInOrder = (c)=>{
        if(Object.keys(c).length === 0){
            return false;
        }else{
            return true;
        }
    }
    const addDataToOrder = ()=>{
        const name = document.querySelector("#name").value;
        const tel = document.querySelector("#tel").value;
        const email = document.querySelector("#email").value;
        if(name === "" || tel === "" || email === ""){
            alert("Por favor, rellene todos los campos")
            return;
        }
        if(!email.includes("@")){
            alert("Por favor, ingrese una dirección de correo electrónico correcta");
            return;
        }
        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [day, month, year].join('-');
        }
        const today = new Date();
        const todayFormated = formatDate(today);
        const tempOrder = {
            buyer:{
                name: name,
                phone: tel,
                email: email
            },
            items: [],
            date: todayFormated,
            totalItems: cart.cantItems,
            totalPrice: cart.totalPrice
        }
        const tempItems = [];
        cart.cartList.forEach(item=>{
            const i = {
                id: item.id,
                title: item.detail,
                price: item.price,
                cant: item.cant
            }
            tempItems.push(i);
        })
        const itemsFiltered = tempItems;
        tempOrder.items = itemsFiltered;
        cart.setCartOrder(tempOrder);
    }
    const isOrderConfirmed =(c)=>{
        if(Object.keys(c).length === 0){
            return false;
        }else{
            return true;
        }
    }
    const confirmOrder = async ()=>{
        setLoading(true);
        cart.setOrderConfirmed(cart.cartOrder);
        const docRef = await addDoc(collection(db, "orders"), cart.cartOrder);
        setOrderId(docRef.id);
        cart.setOrderId(docRef.id);
        cart.cartOrder.items.forEach(item=>{
            
            const productRef = doc(db, "products",item.id);
            const productRefUpdate = async ()=>{
                const stockActual = await getDoc(productRef);
                const value = stockActual.data();
                await updateDoc(productRef,{
                    stock: value.stock - item.cant
                })
            }
            productRefUpdate();
        })
        setLoading(false);
    }
    const clearAll = ()=>{
        cart.clear();
    }
    return(
        <React.Fragment>
            {
                isOrderConfirmed(cart.orderConfirmed) ? 
                <React.Fragment>
                <div className="order-final-container">
                    <div className="order-final">
                        <h2>Detalle de tu<span> pedido realizado: </span></h2>
                        {loading ? 
                        <h3>Id: <span>Cargando...</span></h3>
                        : 
                        <h3>Id: <span>{orderId}</span></h3>
                        }
                        <h4>Detalles del comprador: </h4>
                        <div className="final-detail-container">
                            <p>Nombre: <span> {cart.cartOrder.buyer.name} </span></p>
                        </div>
                        <div className="final-detail-container">
                            <p>Teléfono: <span> {cart.cartOrder.buyer.phone} </span></p>
                        </div>
                        <div className="final-detail-container">
                            <p>Email: <span> {cart.cartOrder.buyer.email} </span></p>
                        </div>
                        <h3>Detalles generales: </h3>
                        <div className="final-detail-container">
                            <p>Fecha: <span> {cart.cartOrder.date} </span></p>
                        </div>
                        <div className="final-detail-container">
                            <h4>Productos: </h4>
                            {cart.cartOrder.items.map(i=><p>{i.title} Cantidad: <span>{i.cant}</span></p>)}
                        </div>
                        <div className="final-detail-container">
                            <p>Precio final: $<span>{cart.totalPrice}</span></p>
                        </div>
                    </div>
                    <div className="buttons-final">
                        <Link to="/" onClick={clearAll}>Volver a inicio</Link>
                    </div>
                </div>
                </React.Fragment>
                :
                isUserInOrder(cart.cartOrder) ? 
                <div className="order-final-container">
                    <div className="order-final">
                        <h2>Detalle de tu<span> pedido</span></h2>
                        <h4>Detalles del comprador: </h4>
                        <div className="final-detail-container">
                            <p>Nombre: <span> {cart.cartOrder.buyer.name} </span></p>
                        </div>
                        <div className="final-detail-container">
                            <p>Teléfono: <span> {cart.cartOrder.buyer.phone} </span></p>
                        </div>
                        <div className="final-detail-container">
                            <p>Email: <span> {cart.cartOrder.buyer.email} </span></p>
                        </div>
                        <h3>Detalles generales: </h3>
                        <div className="final-detail-container">
                            <p>Fecha: <span> {cart.cartOrder.date} </span></p>
                        </div>
                        <div className="final-detail-container">
                            <h4>Productos: </h4>
                            {cart.cartOrder.items.map(i=><p>{i.title} Cantidad: <span>{i.cant}</span></p>)}
                        </div>
                        <div className="final-detail-container">
                            <p>Precio final: $<span>{cart.totalPrice}</span></p>
                        </div>
                    </div>
                    <div className="buttons-final">
                        <Link to="/cart">Volver al carrito</Link>
                        <Link to="/" onClick={cart.clear}>Cancelar pedido</Link>
                        <button type="button" onClick={confirmOrder}>Confirmar compra</button>
                    </div>
                </div>
                :
                <div className="user-data">
                    <div className="user-data-content">
                        <form className="user-data-form">
                            <h3>Confirmar usuario</h3>
                            <div className="data-label-content">
                                <label>Nombre: </label>
                                <input type="text" id="name" placeholder="Nombre"></input>
                            </div>
                            <div className="data-label-content">
                                <label>Teléfono: </label>
                                <input type="number" id="tel" placeholder="Teléfono"></input>
                            </div>
                            <div className="data-label-content">
                                <label>Email: </label>
                                <input type="text" id="email" placeholder="email"></input>
                            </div>
                            <button type="button" onClick={addDataToOrder}>Confirmar usuario</button>
                        </form>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Order;