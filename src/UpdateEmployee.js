import React, { Component } from 'react'
import axios from 'axios';

const apiUrl = 'http://localhost:8089/api/v1/employees/';

export default class UpdateEmployee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Id: null,
            firstname: '',
            lastname: '',
            emailid: '',
            employee: []
        }
    }

    componentDidMount = () => {
        axios.get(apiUrl + this.props.Id)
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
            firstName: e.target.value
        })
    }

    onChangeLastname = (e) => {
        this.setState({
            lastName: e.target.value
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
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            emailid: this.state.emailid
        }

        console.log(employees);

        axios.put(apiUrl + this.props.params.Id, employees)
            .then(res => console.log(res.data));
    }

    render() {
        return (
            <div class="container">
                <h1>Update Employee</h1>
                <br />
                <div>
                    <div>
                        <form class="addForm" onSubmit={this.onSubmit} action="/view">
                        <div>
                            <label>First Name: </label><br/>
                            <input type="text" value={this.state.firstname} onChange={this.onChangeFirstname} />
                        </div>
                        <div>
                            <label>Last Name: </label><br/>
                            <input type="text" value={this.state.lastname} onChange={this.onChangeLastname} />
                        </div>
                        <div>
                            <label>Email Id: </label><br/>
                            <input type="text" required value={this.state.emailid} onChange={this.onChangeEmailid} />
                        </div>
                        <div>
                            <button class="greenBtn">Save</button> &nbsp; &nbsp;
                            <button class="redBtn">Cancel</button>
                        </div>
                        </form>    
                    </div>
                </div>
            </div>
        )
    }
}
