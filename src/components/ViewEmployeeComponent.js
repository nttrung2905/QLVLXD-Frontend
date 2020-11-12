import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee Name: </label>
                            <div> { this.state.employee.name }</div>
                        </div>
                        <div className = "row">
                            <label> Employee BirthDay: </label>
                            <div> { this.state.employee.birthDay }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Gender: </label>
                            <div> { this.state.employee.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Employee IdNo: </label>
                            <div> { this.state.employee.idNo }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Department: </label>
                            <div> { this.state.employee.department }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Position: </label>
                            <div> { this.state.employee.position }</div>
                        </div>
                        <div className = "row">
                            <label> Employee BranchWork: </label>
                            <div> { this.state.employee.branchWork }</div>
                        </div>
                        <div className = "row">
                            <label> Employee PhoneNumber: </label>
                            <div> { this.state.employee.phoneNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Address: </label>
                            <div> { this.state.employee.address }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Note: </label>
                            <div> { this.state.employee.note }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent