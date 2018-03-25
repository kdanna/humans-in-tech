import React, { Component } from "react";
import {TextField, RaisedButton} from 'material-ui'

import Post from './utils/apiMethods'
import IsValidEmail from './utils/helperFuncs'

// Send form data to google sheets
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
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
        this.setState({emailAddress: val})
    }

    handleSubmit = () => {
        if (!IsValidEmail(this.state.emailAddress)){
            this.setState({errorEmail: "please type valid email"})
        }
        else {
            console.log("valid email, so action here")
            let urlBase = "https://script.google.com/macros/s/AKfycbxSll7FPY7GabpSe9zGwFPbRxfIKLRaH0Rfj5uAba6CYL5xlCY/exec"
            let params = "?firstName=" + this.state.firstName + "&lastName=" + this.state.lastName + "&emailAddress=" + this.state.emailAddress
            let url = urlBase + params
            console.log("formPostUrl", url)
            Post(url)
            .then(json => {
                console.log("api worked")
                this.setState({firstName:'', lastName: '', emailAddress: '', errorEmail: ''})
            })
            .catch(r => {console.log('api catch error')})
        }
    }

    render() {
      return (
        <div>
            <form id="gform">
                <TextField
                    floatingLabelText="First Name"
                    type="text" 
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                />
                <br />
                <TextField
                    floatingLabelText="Last Name"
                    type="text" 
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                />
                <br />
                <TextField
                    floatingLabelText="Email Address"
                    type="text" 
                    name="emailAddress"
                    value={this.state.emailAddress}
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