import { Component } from "react";

class UserClass extends Component{
    constructor(props){ 
        super(props);
        this.state = {
            userName:"",
            password:""
        }
    }
    changeUserName=(e)=>{
        this.setState({
            userName:e.target.value
        }, ()=>console.log(this.state.userName))
    }
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        }, ()=>console.log(this.state.password))
    }
    formSubmit=(e)=>{
        alert("Login Successful"+this.state.userName);    
    }

    render(){
        return(
            <div>
                <h1>User Form</h1>
                <form>
                    UserName :<input type="text" name="userName" value={this.state.userName} onChange={this.changeUserName}/>
                    Password :<input type="text" name="password" value={this.state.password} onChange={this.changePassword}/>
                    <button onClick={this.formSubmit}>Submit</button>

                </form>

            </div>
        )
    }
}
export default UserClass