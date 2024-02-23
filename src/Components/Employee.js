import { Component} from "react";
class Employee extends Component {
    render() {
        return (
            <div>
                <h1>Employee Name : {this.props.ename}</h1>
                <h1>Employee Age : {this.props.age}</h1>
                <h1>Employee Salary : {this.props.salary}</h1>
            </div>
        )
    }
};
export default Employee;