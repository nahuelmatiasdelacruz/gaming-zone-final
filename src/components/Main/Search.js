import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import LoadingGif from "../../img/loading.gif";
import { useParams } from "react-router-dom";
import db from "../../firebaseConfig";
import { CartContext } from "../Cart/CartContext";
import ItemList from "../Items/ItemList";

const Search = () =>{
    const {value} = useParams();
    const cart = useContext(CartContext);
    if(cart.orderId!==""){
      cart.clear();
    }
    const [datos,setDatos] = useState([]);
    const [loading, setLoading] = useState(false);
    const getProducts = async () =>{
        try{
          setLoading(true);
          if(value!==""){
            const q = query(collection(db, "products"), where("title","==",value));
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
    }, [value]);
    return(
        <React.Fragment>
            <div className="contenedor-productos">
                {loading ? <img className="loading" src={LoadingGif} alt="Loading.."></img> : <ItemList productList={datos}/>}
            </div>
        </React.Fragment>
    )
}

export default Search;