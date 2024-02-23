import React, { useState } from 'react';
let Userfn=()=>{
    const[name, setName] = useState("");
    const[id, setId] = useState("");
    const[pwd, setPwd] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[address, setAddress] = useState("");
    const[lan, setLan] = useState([]);
    const[gen,setGen] = useState("");
    const[state,setState] = useState("");



    let nameChange=(e)=>{
        setName(e.target.value);
    }
    let idChange=(e)=>{
        setId(e.target.value);
    }
    let pwdChange=(e)=>{
        setPwd(e.target.value);
    }
    let emailChange=(e)=>{
        setEmail(e.target.value);
    }
    let phoneChange=(e)=>{
        setPhone(e.target.value);
    }
    let addressChange=(e)=>{
        setAddress(e.target.value)
    }
    let lanChange=(e)=>{
        const isChecked = e.target.checked
        if(isChecked)
        setLan([...lan,e.target.value] )
        console.log(lan)
    }
    let changeGender=(e)=>{
        setGen(e.target.value);
        
    }
    let changeState=(e)=>{
        setState(e.target.value);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        alert(name+" "+id+" "+pwd+" "+email+" "+phone+" "+address+" "+lan+" "+gen+" "+state);
    }
    let Refresh=()=>{
        window.location.reload();
    }
    
    
    return(
        <form>
            <h1>Customer Form</h1>
            <table>
                <tr>
                    <td>Customer Name</td>
                    <td>
                        <input type="text" id="name" value={name} onChange={nameChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Customer Id
                    </td>
                    <td>
                        <input type="text" id="id" value={id} onChange={idChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password
                    </td>
                    <td>
                        <input type="password" id="password" value={pwd} onChange={pwdChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Customer Email
                    </td>
                    <td>
                        <input type="text" id="email" value={email} onChange={emailChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Customer Phone
                    </td>
                    <td>
                        <input type="number" id="phone" value={phone} onChange={phoneChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Customer Address
                    </td>
                    <td>
                        <textarea rows="3" cols="30" id="address" value={address} onChange={addressChange}></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        Gender
                    </td>
                    <td>
                        <input type="radio" value="Male" name="gender" onChange={changeGender}/>Male
                        <input type="radio" value="Female" name="gender" onChange={changeGender}/>Female
                        <input type="radio" value="Other" name="gender" onChange={changeGender}/>Other
                    </td>
                </tr>
                <tr>
                    <td>
                        Languages Known
                    </td>
                    <td>
                        <input type="checkbox" name="language" value="Java" onChange={lanChange} />Java
                        <input type="checkbox" name="language" value="C++" onChange={lanChange} />C++
                        <input type="checkbox" name="language" value="Python" onChange={lanChange} />Python
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        State
                    </td>
                    <td>
                        <select name="state" onChange={changeState}>
                            
                            <option value="Andaman">Andaman</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option> 
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button id="btn" type="submit" onClick={handleSubmit}>Submit</button>
                    </td>
                    <td>
                        <button id="btn2" type="click" onClick={Refresh}>Refresh</button>
                    </td>
                </tr>
            </table>
        </form>
    )
}

export default Userfn;