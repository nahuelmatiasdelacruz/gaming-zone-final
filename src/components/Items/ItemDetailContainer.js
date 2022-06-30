import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import db from "../../firebaseConfig";

const ItemDetailContainer = ()=>{
    const [datos,setDatos] = useState([]);
    const {id} = useParams();
    const getItem = async () =>{
        try{
          const result = await getDoc(doc(db,"products",id))
          setDatos(result.data());
        }catch(error){
          alert("Hubo un error al conectarse a la base de datos");
        }
    }
    useEffect(()=>{
        getItem();
      }, [datos]);
    return(
        <React.Fragment>
            <ItemDetail item={datos} id={id}></ItemDetail>
        </React.Fragment>
    );
}

export default ItemDetailContainer;