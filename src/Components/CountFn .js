import { useState } from "react"


let CountFn = () =>{
    let[count,setCount] = useState(0);
    let increment = () =>{
        setCount((prevCounter) => prevCounter + 1);

    }
    let decrement = () =>{
        setCount((prevCounter) => prevCounter - 1);

    }
    let decrement5=() =>{
        decrement();
        decrement();
        decrement();
        decrement();
        decrement();
    }
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>decrement5()}>Decrement By 5</button>

        </div>
    )
}
export default CountFn