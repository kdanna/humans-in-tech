import React, { Component } from "react"
import './App.css';
import GetInvolved from "./GetInvolved";
import Mentorship from "./Mentorship";
import MeetTeam from "./MeetTeam";
import hitLogo from './images/hitLogoWhite.svg';
import Content from './components/Content/Content';
import valuesWordCloud from "./images/valuesWordCloud.png";


class Landing extends Component {

    state = {
        tagline: 'EMPOWERING THE TECH COMMUNITY TO EMBRACE OUR HUMANITY',
        content: {
            titleOne: 'Vision / Mission',
            paragraphOne: 'The Humans in Tech Project aims to create a tech community built upon our shared humanity. This is a world where individuals and teams will engage in inclusive collaboration by being empathetic, vulnerable, and generous. We believe that the resulting safe culture will allow individuals to experience a sense of purpose, allow teams to capitalize on their member’s knowledge/creativity, and allow the community as a whole to create technology aligned with the values of humanity.',
        }
    };

  render() {
    return (
      <div className='App'>

          <div className='heroContent'>
              <div className="overlay">
                  <img className="logo" src={hitLogo} alt="logo" />
              </div>
          </div>

        <div className='taglineDiv'>
          <div><h2>{this.state.tagline}</h2></div>
        </div>

        <div className='content'>
            <div className='row'>
                <div className="column">
                    <Content title={this.state.content.titleOne} bodyText={this.state.content.paragraphOne} />
                </div>
                <div className='column'>
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