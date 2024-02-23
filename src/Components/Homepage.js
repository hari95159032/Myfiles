import React from'react';
import { useNavigate } from 'react-router-dom';
let Homepage=()=>{
    const navigate = useNavigate();
    return(
        
        <>
            <h1>This is HomePage</h1>
           
            <button class="btnmain" onClick={()=>navigate('/about')}>About</button>
        
        </>
    );
}
export default Homepage;