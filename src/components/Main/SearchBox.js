import React, { useState } from "react";
import "../../css/styles.css";
import SearchIcon from "../../img/search-icon.png";
import { Link } from "react-router-dom";

const SearchBox = ()=>{
    const [searchValue,setSearchValue] = useState("");
    const buscar = (e)=>{
        setSearchValue(e.target.value);
    }
    return(
        <React.Fragment>
            <div className="search-box">
                <form className="search-box-form" onSubmit={(e)=>{e.preventDefault()}}>
                    <input className="search-box-input" onChange={buscar} type="text" placeholder="Buscar producto"></input>
                    <Link className="search-button" to={`/search/${searchValue}`}><img src={SearchIcon} alt="Icono Buscar"></img></Link>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SearchBox;