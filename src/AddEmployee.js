import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8089/api/v1/employees/';

export default class AddEmployee extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Id: null,
             firstname: '',
             lastname: '',
             emailid: '',
             employee: []
        }
    }

    componentDidMount = () => {
        axios.get(apiUrl)
            .then(response => {
                this.setState({
                    Id: response.data.Id,
                    firstName: response.data.firstname,
                    lastName: response.data.lastname,
                    emailid: response.data.emailid
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(apiUrl)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        employee: response.data.map(employee => employee.Id),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeId = (e) => {
        this.setState({
            Id: e.target.value
        })
    }

    onChangeFirstname = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    onChangeLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    onChangeEmailid = (e) => {
        this.setState({
            emailid: e.target.value
        })
    }

    onSubmit = (e) => {

        const employees = {
            Id: this.state.Id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailid: this.state.emailid
        }

        console.log(employees);

        axios.post(apiUrl, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div class="container">
                <br/>
                <h1>Add Employee</h1>
                <br/>
                <div>
                    <form class="addForm" onSubmit={this.onSubmit} action="/view">
                    <div>
                        <label>First Name:  </label><br/>
                        <input type="text" placeholder="First Name" value={this.state.firstname} onChange={this.onChangeFirstname} /><br/>
                        <label>Last Name:  </label><br/>
                        <input type="text" placeholder="Last Name" value={this.state.lastname} onChange={this.onChangeLastname} />
                    </div>
                    <div>
                        <label>Email:    </label><br/>
                        <input type="text" placeholder="Email Address" required value={this.state.emailid} onChange={this.onChangeEmailid} />
                    </div>
                    <div>
                        <br/>
                        <input type="submit" value="Submit" />
                        <a href="/view"><button>Cancel</button> </a>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}