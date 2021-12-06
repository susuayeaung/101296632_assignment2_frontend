import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = 'http://localhost:8089/api/v1/employees/';

export default class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = { employee: [] };
    }

    componentDidMount() {
        axios.get(apiUrl)
            .then(response => {
                console.log(response.data)
                const employee = response.data
                this.setState({ employee })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteEmployee(id) {

        axios.delete(apiUrl + id)
            .then(response => { console.log(response.data) });
    }

    render() {
        return (
            <div>
                <h1 class="container">Employees List</h1>
                <button class="blueBtn">Add Employee</button>
                <br/><br/>
                <table class="containerTable">
                    <thead>
                        <tr>
                            <th>Employee Firstname</th> &nbsp; &nbsp;
                            <th>Employee Lastname</th> &nbsp; &nbsp;
                            <th>Employee Email id</th> &nbsp; &nbsp;
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{EmployeeList.firstname}</td> &nbsp; &nbsp;
                            <td>{EmployeeList.lastname}</td> &nbsp; &nbsp;
                            <td>{EmployeeList.emailid}</td> &nbsp; &nbsp;
                            <td>
                                <button class="lightBlueBtn">Update</button>
                                <button class="redBtn" onClick={(e) => { EmployeeList.deleteEmployee(EmployeeList.employee._id) }}>Delete</button>
                                <button class="lightBlueBtn">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }
}
