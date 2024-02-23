import React from 'react';
let Welcomet = (props) =>{
    return (
        <div>
            <h1>Welcome to React {props.name}</h1>
        </div>
        )
}
// let Welcomet = () => {
//     return React.createElement("div",{"id":"main","class":"mainClass"},React.createElement("h1",null,"Welcome to React Mr.Harikrishna"));
// };
export default Welcomet;