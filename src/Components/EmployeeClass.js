import React, { Component} from 'react';
import './EmployeeClass.css';
class EmployeeClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            age:"",
            pnum:"",
            sal:"",
            email:"",
            skills:[]=[]
        }
    }
    ChangeName = (e) =>{
        this.setState({
            name:e.target.value
        }, ()=>console.log(this.state.name))
    }
    ChangeAge = (e) =>{
        this.setState({
            age:e.target.value
        }, ()=>console.log(this.state.age))
    }
    ChangePhoneNum = (e) =>{
        this.setState({
            pnum:e.target.value
        }, ()=>console.log(this.state.pnum))
    }
    ChangeSalary = (e) =>{
        this.setState({
            sal:e.target.value
        }, ()=>console.log(this.state.sal))
    }
    ChangeEmail = (e) =>{
        this.setState({
            email:e.target.value
        }, ()=>console.log(this.state.email))
    }
    ChangeSkills = (e) =>{
        const isChecked = e.target.checked
        if(isChecked)
        this.setState({
            skills:[...this.state.skills,e.target.value]})
    }
    
    OnSubmit = (e) =>{
        alert(this.state.name+" "+this.state.age+" "+this.state.pnum+" "+this.state.sal+" "+this.state.email+" "+this.state.skills);
    }
    render(){
        return(
            <div>
                <h1>Employee Form</h1>
                <form>
                    <table>
                        <tr>
                            <td>Name : </td>
                            <td>
                                <input type="text" value={this.state.name} placeholder='Please enter your name' onChange={this.ChangeName}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Age : </td>
                            <td>
                                <input type="number" value={this.state.age} placeholder='Please enter your age' onChange={this.ChangeAge}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Phone Number :
                            </td>
                            <td>
                                <input type="number" value={this.state.pnum} placeholder='Please enter your phone number' onChange={this.ChangePhoneNum}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Salary : </td>
                            <td>
                                <input type="number" value={this.state.sal} placeholder='Please enter your salary' onChange={this.ChangeSalary}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email : </td>
                            <td>
                                <input type="email" value={this.state.email} placeholder='Please enter your email' onChange={this.ChangeEmail}/>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                Skills : 
                            </td>
                            <td>
                                <input type="checkbox" value="Java" placeholder='Please enter your skills' onChange={this.ChangeSkills}/>Java
                                <input type="checkbox" value="C++" placeholder='Please enter your skills' onChange={this.ChangeSkills}/>C++
                                <input type="checkbox" value="Javascript" placeholder='Please enter your skills' onChange={this.ChangeSkills}/>Javascript
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button class="btn btn-success" onClick={this.OnSubmit}>Submit</button>
                            </td>
                        </tr>
                    </table>
                    
                </form>
            </div>
        )
    }
}
export default EmployeeClass