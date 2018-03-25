import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // initialize material.ui theme
import { Route, NavLink, HashRouter, Link } from "react-router-dom";
import Home from "./Home";
import GetInvolved from "./GetInvolved";
import MeetTeam from "./MeetTeam";
import ContactUs from "./ContactUs";
import hitLogo from './images/hitLogoNoBorder.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
              <div className="App-hero">
                <img className="App-logo" src={hitLogo} alt="logo" />
              </div> 
              <HashRouter>  
                <div className="navBar">
                  <ul className="header">
                      <li><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink to="/meet-the-team">Meet the Team</NavLink></li>
                      <li><NavLink to="/get-involved">Get Involved</NavLink></li>
                      <li><NavLink to="/contact">Contact Us</NavLink></li>
                  </ul>
                  <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/get-involved" component={GetInvolved}/>
                    <Route path="/meet-the-team" component={MeetTeam}/>
                    <Route path="/contact" component={ContactUs}/>
                  </div>
                </div>
              </HashRouter>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
