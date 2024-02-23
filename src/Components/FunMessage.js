import { useState } from "react"

let FunMessage =()=>{
    const[msg,setMsg] = useState("message is already set")
    let onChange = ()=>{
        setMsg("message is changed")
    }
    return(
        <div>
            <h1>{msg}</h1>
            {/* <button class="btn btn-success" onClick={()=>setMsg("message is changed")}>Click</button> */}
            <button class="btn btn-success" onClick={()=>onChange()}>Click</button>
        </div>
    )
}
export default FunMessage;