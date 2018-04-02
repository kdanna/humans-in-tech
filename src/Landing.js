import React, { Component } from "react"
import './App.css';
import hitLogo from './images/hitLogoWhite.svg';
import Content from './components/Content/Content';
import SignUp from "./components/SignUp";
import Grid from './components/MeetTeamGrid'
import valuesWordCloud from "./images/valuesWordCloud.png";
import { NavBar } from "./components/Navbars";


class Landing extends Component {

    text = {
        tagline: 'EMPOWERING THE TECH COMMUNITY TO EMBRACE OUR HUMANITY',
        content: {
            titleVisonMission: 'Vision / Mission',
            paragraphVisionMission: 'The Humans in Tech Project aims to create a tech community built upon our shared humanity. This is a world where individuals and teams will engage in inclusive collaboration by being empathetic, vulnerable, and generous. We believe that the resulting safe culture will allow individuals to experience a sense of purpose, allow teams to capitalize on their member’s knowledge/creativity, and allow the community as a whole to create technology aligned with the values of humanity.',
            titleGetInvolved: "Get Involved",
            paragraphGetInvolved: "There are many ways to get involved in this project. Please start by joining our mailing list so we can keep you updated on events and volunteer opportunities.",
            titleMentorship: "Mentorship Program",
            paragraphMentorship: "We are launching a beta mentorship program. If you live in Denver and are in the early stages of your tech career, or you are trying to enter the tech industry please fill out our application.",
            titleMeetTeam: "Meet the Team",
            paragraphMeetTeam: "Meet the people behind Humans in Tech.",
        },
        buttonLabel: {
            mailingList: "Join Our Mailing List",
            mentorshipApplication: "Apply Now",
        }
    };

  render() {
    return (
      <div className='App'>
          <NavBar />
          <div className='heroContent'>
              <div className="overlay">
                  <img className="logo" src={hitLogo} alt="logo" />
              </div>
          </div>

        <div className='taglineDiv'>
          <div><h2>{this.text.tagline}</h2></div>
        </div>

        <div className='content'>
            <div className='row'>
                <div className="column">
                    <Content title={this.text.content.titleVisonMission} bodyText={this.text.content.paragraphVisionMission} />
                </div>
                <div className='column'>
                    <img className="valuesImg" src={valuesWordCloud} alt="valuesImg" />
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='row'>
                <div id='get-involved' className="column-full">
                    <Content title={this.text.content.titleGetInvolved} bodyText={this.text.content.paragraphGetInvolved} />
                </div>
                <SignUp
                    label={this.text.buttonLabel.mailingList}
                />
            </div>
        </div>

        <div className='content'>
            <div className='row'>
                <div id='mentorship' className="column-full">
                    <Content title={this.text.content.titleMentorship} bodyText={this.text.content.paragraphMentorship} />
                </div>
                <SignUp
                    label={this.text.buttonLabel.mentorshipApplication}
                />
            </div>
        </div>
        <div className='content'>
            <div className='row'>
                <div id='meet-the-team' className="column-full">
                    <Content title={this.text.content.titleMeetTeam} bodyText={this.text.content.paragraphMeetTeam} />
                </div>
                <Grid />
            </div>
        </div>

       </div>

    );
  }
}
 
export default Landing