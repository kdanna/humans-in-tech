import React, { Component } from "react"
import Dialog from 'material-ui/Dialog'
import { RaisedButton } from 'material-ui'

// pass in Google Forms
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            btnLabel: props.label,
            formLink: props.formLink
        }
    }
    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
    }
    
    render() {
        const actions = [
            <RaisedButton
                type="button"
                label="Exit Form"
                onClick={this.handleClose}
                className="cancel-left"
            />
        ]
        return (
            <span>
                <RaisedButton label={this.state.btnLabel} onClick={this.handleOpen} secondary={true}/>
                <Dialog
                    modal={false}
                    open={this.state.open}
                    actions={actions}
                    onRequestClose={this.handleClose}
                    contentStyle={{width: "50%", maxWidth: "none", textAlign: "center"}}
                    autoScrollBodyContent={true}
                >
                <div>
                    {this.state.formLink}
                </div> 
                </Dialog>
            </span>
        );
    }
  }
   
  export default SignUp