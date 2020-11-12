import React, { Component } from 'react';

import EmployeeService from '../services/EmployeeService';

export default class BoardEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []

        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.employeeId !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth day</th>
                                <th>Gender</th>
                                <th>Id No</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Branch Work</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Note</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key = {employee.employeeId}>
                                            <td>{employee.name}</td>
                                            <td>{employee.birthDay}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.idNo}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.position}</td>
                                            <td>{employee.branchWork}</td>
                                            <td>{employee.phoneNumber}</td>
                                            <td>{employee.address}</td>
                                            <td>{employee.note}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.employeeId)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.employeeId)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.employeeId)} className="btn btn-info">View </button>

                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

