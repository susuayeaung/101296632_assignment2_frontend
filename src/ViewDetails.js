import React, { Component } from 'react'
import axios from 'axios';

const apiUrl = 'http://localhost:8089/api/v1/employees/';

export default class ViewDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Id: null,
            firstName: '',
            lastName: '',
            emailid: '',
            employee: []
        }
    }

    componentDidMount = () => {
        axios.get(apiUrl + this.props.Id)
            .then(response => {
                this.setState({
                    Id: response.data.Id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
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
                        employee: response.data.map(employee => employee.firstname),
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

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailid: this.state.emailid
        }

        console.log(employees);

        axios.put(apiUrl + this.props.params.Id, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div class="container">
                <h3>View Employee Details</h3>
                <br />
                <div class="displayDetails">
                    <div>
                        <strong> Employee First Name :</strong> {this.state.firstName}
                    </div>
                    <div>
                        <strong> Employee Last Name : </strong>{this.state.lastName}
                    </div>
                    <div>
                        <strong> Employee Email ID: </strong>{this.state.emailid}
                    </div>    
                </div>
            </div >
        )
    }
}
