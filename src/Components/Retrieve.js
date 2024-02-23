import React from "react";
import { useNavigate } from "react-router-dom";
let Show=()=>{
    const navigate = useNavigate();
    return(
        <div>
            <h1>All User Details</h1>
            <table className="tble">
                <thead>
                    <th>
                        C_Name
                    </th>
                    <th>C_Id</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>State</th>
                    <th colspan="3">Action</th>
                </thead>
                <tr>
                    <td>Krishna</td>
                    <td>213</td>
                    <td>krishna@gmail.com</td>
                    <td>8974563210</td>
                    <td>Andhra pradesh</td>
                    <td><button className="btncls" onClick={()=>{navigate('/edit')}}>EDIT</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/info')}}>Info</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/delete')}}>Delete</button></td>
                </tr>
                <tr>
                    <td>Gokul[CR]</td>
                    <td>212</td>
                    <td>gokul@gmail.com</td>
                    <td>7984563210</td>
                    <td>Tamilnadu</td>
                    <td><button className="btncls" onClick={()=>{navigate('/edit')}}>EDIT</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/info')}}>Info</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/delete')}}>Delete</button></td>
                </tr>
                <tr>
                    <td>Pulihora[Siva D]</td>
                    <td>212</td>
                    <td>pulihora@gmail.com</td>
                    <td>7874563210</td>
                    <td>Tamilnadu</td>
                    <td><button className="btncls" onClick={()=>{navigate('/edit')}}>EDIT</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/info')}}>Info</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/delete')}}>Delete</button></td>
                </tr>
                <tr>
                    <td>Hari</td>
                    <td>212</td>
                    <td>krishna@gmail.com</td>
                    <td>6874563210</td>
                    <td>Andhra pradesh</td>
                    <td><button className="btncls" onClick={()=>{navigate('/edit')}}>EDIT</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/info')}}>Info</button></td>
                    <td><button className="btncls" onClick={()=>{navigate('/delete')}}>Delete</button></td>
                </tr>
            </table>
        </div>
    )
}
export default Show;
// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks