import React from "react";
import { useNavigate } from 'react-router-dom';
let Sidebar=()=>{
    let navigatefn = useNavigate();
    return(
        <div className="Container">
            
            <br></br>
            <button type="button" className="id1" onClick={()=>{navigatefn('/get')}}>Retrieve Page</button>
            <br></br>
            <br></br>
            <button type="button" className="id2">View Customer</button>
            <br></br>
            <br></br>
            
            <button type="button" className="id3" onClick={()=>{navigatefn('/home')}}>Add Customer</button>
            <br></br>
            <br></br>
            
            <button type="button" className="id4">Delete Customer</button>
            
        </div>
    )
}
export default Sidebar;