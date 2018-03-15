import React, { Component } from "react";

// Send form data to google sheets
class SignUp extends Component {
    render() {
      return (
        <div>
            <form id="gform" method="GET" action="https://script.google.com/macros/s/AKfycbxSll7FPY7GabpSe9zGwFPbRxfIKLRaH0Rfj5uAba6CYL5xlCY/exec">
                <div>
                    <label>First Name</label>
                    <input type="text" name="first_name"/>
                </div>

                <div>
                    <label>Last Name</label>
                    <input type="text" name="last_name"/>
                </div>
                
                <div>
                    <label>Email Address</label>
                    <input type="text" name="email_address"/>
                </div>
                
                <div>
                    <button type="submit"id="submit-form">Submit</button>
                </div>
            </form>
        </div>
      );
    }
  }
   
  export default SignUp