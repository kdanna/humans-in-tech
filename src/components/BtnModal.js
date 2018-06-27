import React, { Component } from "react"
import Dialog from 'material-ui/Dialog'
import { RaisedButton } from 'material-ui'
import ReactGA from 'react-ga';

// pass in Google Forms
class BtnModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    handleOpen = () => {
        this.setState({open: true})
        ReactGA.event({
            category: 'Site',
            action: 'Modal opened',
            label: this.props.label
          });
    }
    handleClose = () => {
        this.setState({open: false})
        ReactGA.event({
            category: 'Site',
            action: 'Modal closed',
            label: this.props.label
          });
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
                <RaisedButton label={this.props.label} onClick={this.handleOpen} secondary={true}/>
                <Dialog
                    modal={false}
                    title={this.props.title}
                    open={this.state.open}
                    actions={actions}
                    onRequestClose={this.handleClose}
                    contentStyle={{width: "66%", maxWidth: "none", textAlign: "center"}}
                    autoScrollBodyContent={true}
                >
                <div>
                    {this.props.formLink}
                </div> 
                </Dialog>
            </span>
        );
    }
  }
   
  export default BtnModal