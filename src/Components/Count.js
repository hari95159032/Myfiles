import { Component} from "react";
class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }

    }
    increment = () =>{
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState(prevState =>{
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    // increment3 = () => {
    //     this.setState({
    //         count:this.state.count+3
    //     })
    // }
    increment3 = () =>{
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment3}>Increment3</button>
            </div>)
    }
}
export default Count;