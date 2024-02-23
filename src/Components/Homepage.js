import React from "react";
import { Outlet } from "react-router-dom";
// import CData from "./CData";
// import CInfo from "./CInfo";
import { Link } from "react-router-dom";

let Homepage=()=>{
    return(
        <div id="clshome" >
            <nav>
                <Link className="p1" to='/page1'>C_Data</Link>
                <Link className="p2" to='/page2'>C_Info</Link>
            </nav>
           
            <Outlet></Outlet>
        </div>
    )
}
export default Homepage;