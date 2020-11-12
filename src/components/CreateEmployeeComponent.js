import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            birthDay: '',
            gender: '',
            idNo: '',
            department: '',
            position: '',
            branchWork: '',
            phoneNumber: '',
            address: '',
            note: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBirthDayHandler = this.changeBirthDayHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeIdNoHandler = this.changeIdNoHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changePositionHandler = this.changePositionHandler.bind(this);
        this.changeBranchWorkHandler = this.changeBranchWorkHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    name: employee.name,
                    birthDay: employee.birthDay,
                    gender: employee.gender,
                    idNo: employee.idNo,
                    department: employee.department,
                    position: employee.position,
                    branchWork: employee.branchWork,
                    phoneNumber: employee.phoneNumber,
                    address: employee.address,
                    note: employee.note

                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            name: this.state.name,
            birthDay: this.state.birthDay,
            gender: this.state.gender,
            idNo: this.state.idNo,
            department: this.state.department,
            position: this.state.position,
            branchWork: this.state.branchWork,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            note: this.state.note
        };
        console.log('employee => ' + JSON.stringify(employee));


        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeBirthDayHandler = (event) => {
        this.setState({ birthDay: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeIdNoHandler = (event) => {
        this.setState({ idNo: event.target.value });
    }

    changeDepartmentHandler = (event) => {
        this.setState({ department: event.target.value });
    }

    changePositionHandler = (event) => {
        this.setState({ position: event.target.value });
    }

    changeBranchWorkHandler = (event) => {
        this.setState({ branchWork: event.target.value });
    }
    changePhoneNumberHandler = (event) => {
        this.setState({ phoneNumber: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeNoteHandler = (event) => {
        this.setState({ note: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }



    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>  Name: </label>
                                        <input placeholder=" Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Birth Day: </label>
                                        <input placeholder="BirthDay" name="birthDay" className="form-control"
                                            value={this.state.birthDay} onChange={this.changeBirthDayHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Gender: </label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gendr} onChange={this.changeGenderHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Id No: </label>
                                        <input placeholder="IdNo" name="idNo" className="form-control"
                                            value={this.state.idNo} onChange={this.changeIdNoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Department: </label>
                                        <input placeholder="Department" name="department" className="form-control"
                                            value={this.state.department} onChange={this.changeDepartmentHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Position: </label>
                                        <input placeholder="Position" name="position" className="form-control"
                                            value={this.state.position} onChange={this.changePositionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Branch Work: </label>
                                        <input placeholder="BranchWork" name="branchWork" className="form-control"
                                            value={this.state.branchWork} onChange={this.changeBranchWorkHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Phone Number: </label>
                                        <input placeholder="Phone Number" name="phoneNumber" className="form-control"
                                            value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Note: </label>
                                        <input placeholder="Note" name="note" className="form-control"
                                            value={this.state.note} onChange={this.changeNoteHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
