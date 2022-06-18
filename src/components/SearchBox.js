import React from "react";
import "../css/styles.css";
import SearchIcon from "../img/search-icon.png";

const SearchBox = ()=>{
    return(
        <React.Fragment>
            <div className="search-box">
                <form className="search-box-form">
                    <input className="search-box-input" type="text" placeholder="Buscar producto"></input>
                    <img src={SearchIcon} alt="Search Icon"/>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SearchBox;