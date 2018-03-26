import React, { Component } from "react";
import SignUp from "./SignUp";
import { NavBarAllElse } from "./Navbars"

 
class GetInvolved extends Component {
  render() {
    return (
      <div id='get-involved'>
        <NavBarAllElse />
        <h2>Get Involved</h2>
        <p> There are many ways to get involved in this project. Please start by joining 
            our mailing list so we can keep you updated on events and volunteer opportunities</p>
        <SignUp></SignUp>

      </div>
    );
  }
}
 
export default GetInvolved