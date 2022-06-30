import React, { useContext, useEffect, useState } from "react";
import '../../css/styles.css';
import LoadingGif from "../../img/loading.gif";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebaseConfig";
import { CartContext } from "../Cart/CartContext";

const ItemListContainer = () =>{
    const cart = useContext(CartContext);
    if(cart.orderId!==""){
      cart.clear();
    }
    let {id} = useParams();
    const [datos,setDatos] = useState([]);
    const [loading, setLoading] = useState(false);
    const getProducts = async () =>{
        try{
          setLoading(true);
          if(id!==undefined){
            const q = query(collection(db, "products"), where("categoryId", "==", id));
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document=>({
              id: document.id,
              ...document.data()
            }));
            setDatos(dataFromFirestore);
          }else{
            const q = query(collection(db, "products"));
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document=>({
              id: document.id,
              ...document.data()
            }));
            setDatos(dataFromFirestore);
          }
        }catch(error){
          alert("Hubo un error al conectarse a la base de datos");
        }finally{
          setLoading(false);
        }
    }
    useEffect(()=>{
        getProducts();
    }, [id]);
    return(
        <React.Fragment>
            <div className="contenedor-productos">
                {loading ? <img className="loading" src={LoadingGif} alt="Loading.."></img> : <ItemList productList={datos} categoryId={id}/>}
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer;