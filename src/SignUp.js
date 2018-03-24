import React, { Component } from "react";
import {TextField, RaisedButton} from 'material-ui';

const IsValidEmail = (value) => {
    var re = /^[^@]+@[^@]+$/
    return re.test(value)
}

const Post = (url, data = {}) => {
    return fetch(url, {
        method: "GET",
        data: JSON.stringify(data), 
        dataType: "json",
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(handleResponse) // parses response to JSON
  }

const handleResponse = (response) => {
    if (response) {
        return response
    }
    if (!response) {
        return response
    }
    throw (response)
}

// Send form data to google sheets
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            errorEmail: '',
            isBtnDisabled: false,
        }
    }
    handleFirstNameChange = (e, val) =>  {
        this.setState({firstName: val})
    }

    handleLastNameChange = (e, val) =>  {
        this.setState({lastName: val})
    }

    handleEmailChange = (e, val) =>  {
        this.setState({email: val})
    }

    handleSubmit = () => {
        if (!IsValidEmail(this.state.email)){
            this.setState({errorEmail: "please type valid email"})
        }
        else {
            console.log("valid email, so action here")
            let data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailAddress: this.state.email
            }
            console.log(data)
            let urlBase = "https://script.google.com/macros/s/AKfycbxSll7FPY7GabpSe9zGwFPbRxfIKLRaH0Rfj5uAba6CYL5xlCY/exec"
            let params = "?firstName=" + data.firstName + "&lastName=" + data.lastName + "&emailAddress=" + data.emailAddress
            let url = urlBase + params
            console.log("url", url)
            Post(url)
                .then(json =>{
                    this.setState({
                        firstName: '', 
                        lastName: '',
                        email: '',
                    })
                })
                .catch(r => console.error(r))
        }
    }


    render() {
      return (
        <div>
            <form id="gform" method="GET" action="https://script.google.com/macros/s/AKfycbxSll7FPY7GabpSe9zGwFPbRxfIKLRaH0Rfj5uAba6CYL5xlCY/exec?{}">
                <TextField
                    floatingLabelText="First Name"
                    type="text" 
                    name="firstName"
                    value={this.firstName}
                    onChange={this.handleFirstNameChange}
                />
                <br />
                <TextField
                    floatingLabelText="Last Name"
                    type="text" 
                    name="lastName"
                    value={this.LastName}
                    onChange={this.handleLastNameChange}
                />
                <br />
                <TextField
                    floatingLabelText="Email Address"
                    type="text" 
                    name="emailAddress"
                    value={this.email}
                    onChange={this.handleEmailChange}
                    errorText={this.state.errorEmail}
                />
                <br />                
                <RaisedButton 
                    label="Submit" 
                    type="button"
                    id="submit-form"
                    onClick={this.handleSubmit}
                />
            </form>
        </div>
      );
    }
  }
   
  export default SignUp