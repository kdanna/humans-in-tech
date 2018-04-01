import React, { Component } from "react"
import { NavBar, HeroBlock } from './Navbars'
import './App.css';
import GetInvolved from "./GetInvolved";
import Mentorship from "./Mentorship";
import MeetTeam from "./MeetTeam";
import valuesWordCloud from "./images/valuesWordCloud.png"


class Landing extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <HeroBlock />
        <div className='taglineDiv'>
          <div> EMPOWERING THE TECH COMMUNITY TO EMBRACE OUR HUMANITY </div>
        </div>
        <div className='content'>
            <h2>Vision / Mission</h2>
          <div className='contentBody'>
            <p> The Humans in Tech Project aims to create a tech community built upon our shared humanity. 
                This is a world where individuals and teams will engage in inclusive collaboration by 
                being empathetic, vulnerable, and generous. We believe that the resulting safe culture will 
                allow individuals to experience a sense of purpose, allow teams to capitalize on their member’s 
                knowledge/creativity, and allow the community as a whole to create technology aligned with the 
                values of humanity.
            </p>
            <div>
              <img className="valuesImg" src={valuesWordCloud} alt="valuesImg" />
            </div>
          </div>
        </div>
        <GetInvolved />
        <Mentorship />
        <MeetTeam />
       </div>

    );
  }
}
 
export default Landing