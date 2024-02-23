import { Component} from "react";
class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Hari"
        }
    }
    onChange = () =>{
        this.setState({
            name: "Harikrishna"
        })
    }
    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button bg-primary onClick={()=>this.onChange()}>Click</button>
            </div>)
    }
}
export default Message;