import { useParams } from "react-router-dom"

let Display=()=>{

    const params=useParams()
    const id2=params.id;

    return(
        <div>
            <h1>This is My ID : {id2}</h1>
        </div>
    )
}
export default Display