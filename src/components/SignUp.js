import React, { Component } from "react";
import {TextField, RaisedButton, FlatButton} from 'material-ui'
import Dialog from 'material-ui/Dialog'

import Post from '../utils/apiMethods'
import IsValidEmail from '../utils/helperFuncs'

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
            open: false,
            btnLabel: props.label
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

    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
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
        const actions = [
            <FlatButton
              label="Cancel"
              onClick={this.handleClose}
              className="cancel-left"
            />,
            <RaisedButton
              label="Submit"
              type="button"
              primary={true}
              id="submit-form"
              onClick={this.handleSubmit}
            />,
          ]
      return (
        <span>
            <RaisedButton label={this.state.btnLabel} onClick={this.handleOpen} primary={true}/>
            <Dialog
                title="Sign Up for Our Mailing List"
                titleStyle={{textAlign: "center"}}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                contentStyle={{width: "50%", maxWidth: "none", textAlign: "center"}}
                autoScrollBodyContent={true}
            >
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
                </form>
            </Dialog>
        </span>
      );
    }
  }
   
  export default SignUp