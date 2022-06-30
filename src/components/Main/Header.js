import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = ()=>{
    return(
        <React.Fragment>
            <div className="header">
                <SearchBox/>
                <div className="logo">
                    <Link to="/"><h2>Gaming <span>Zone</span></h2></Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;