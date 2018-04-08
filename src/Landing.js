import React, { Component } from "react"
import './App.css';
import hitLogo from './images/hitLogoWhite.svg';
import Content from './components/Content/Content';
import SignUp from "./components/SignUp";
import valuesWordCloud from "./images/valuesWordCloud.png";
import sagi from "./images/sagi.jpg";
import tim from "./images/tim.jpg";
import sasha from "./images/sasha.jpg";
import kayce from "./images/kayce.jpg";
import { NavBar } from "./components/Navbars";
import MeetTeamBlock from "./components/MeetTeamCards";


class Landing extends Component {

    text = {
        tagline: 'EMPOWERING THE TECH COMMUNITY TO EMBRACE OUR HUMANITY',
        content: {
            titleVisonMission: 'Vision / Mission',
            paragraphVisionMission: 'The Humans in Tech Project aims to create a tech community built upon our shared humanity. This is a world where individuals and teams will engage in inclusive collaboration by being empathetic, vulnerable, and generous. We believe that the resulting safe culture will allow individuals to experience a sense of purpose, allow teams to capitalize on their member’s knowledge/creativity, and allow the community as a whole to create technology aligned with the values of humanity.',
            titleGetInvolved: "Get Involved",
            paragraphGetInvolved: "There are many ways to get involved in this project. Please start by joining our mailing list so we can keep you updated on events and volunteer opportunities.",
            titleMentorship: "Mentorship Program",
            subtitle1Mentorship: "what is it",
            paragraphMentorship1: "The Humans in Tech mentorship program is designed as an experiment in creating a collaborative tech community that continuously gives back to one another. You will be paired with a software developer or data scientist/analyst for a 2 month period. During this time, you will explore topics that go beyond technical skills. You will reach deep to understand what makes you tick and develop your unique value proposition as well as attend a meetup together with your mentor to build your confidence as a member of the community!",
            paragraphMentorship2: "If this sounds exciting to you, we invite you to attend an information session to learn more about it. The session will be held Wednesday, April 25th @ [TBD]. Please RSVP to the session on the following EventBrite page: [TBD]",
            subtitle2Mentorship: "who is it for",   
            paragraphMentorship3: "We are looking for aspiring or current software developers and aspiring or current data scientists who believe in our shared vision for developing a community. You should be in the Denver area and available during the June/July timeframe for 5 in-person sessions (flexible scheduling) with your mentor as well as the week of May 21st and first week of August for a mentor-matching social and post-mortem whose exact dates/times are TBD.",      
            subtitle3Mentorship: "expectations",
            paragraphMentorship4: "In the spirit of collaboration and community, paying it forward right away is part of the model. We expect that mentees will become mentors for those following in their footsteps. Our vision is that mentors will also find mentors of their own thereby creating a chain of connected individuals built on the principles of generosity. We believe that this humble approach will help us create a safe, wise community focused on developing one another as students of the world.",
            subtitle4Mentorship: "outcomes",
            mentorshipOutcomes1: "Develop your unique value proposition",
            mentorshipOutcomes2: "Learn how to access the tech community",
            mentorshipOutcomes3: "Support in your career journey",
            mentorshipOutcomes4: "Model the humanity of the tech community and become a Humans in Tech agent of change",
            titleMeetTeam: "Meet the Team",
            paragraphMeetTeam: "Meet the people behind Humans in Tech.",
        },
        buttonLabel: {
            mailingList: "Join Our Mailing List",
            mentorshipApplication: "Apply Now",
        },
        forms: {
            signUp: <iframe title='contactForm' src="https://docs.google.com/forms/d/e/1FAIpQLSeZTjMCK4iMPgpaKEm6TA6s0y46N3o6Ia_DI1tHTiFrZzihrQ/viewform?embedded=true" width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>,
        }
    };

    tilesData = [
        {
          img: sagi,
          name: 'Sagi Zisman',
          position: 'data scientist',
          bio: 'Sagi is passionate about empowering others to become lifelong learners. Since graduating with a BS and MS in Electrical and Computer Engineering from The University of Texas at Austin, he has solidified his passion by teaching data science to dozens of aspiring professionals at General Assembly Denver as well as co-founding a K-12 STEM non-profit called STEMed Labs in Austin, TX. He currently works as a data scientist at Return Path. By co-founding Humans in Tech, Sagi hopes to inspire technologists to form deeper relationships with peers on their quest of lifelong learning.'
        },
        {
          img: tim,
          name: 'Tim Perkins',
          position: 'data master',
          bio: ''
        },
        {
          img: sasha,
          name: 'Sasha Mushovic',
          position: 'data scientist',
          bio: 'Sasha grew up in Alaska, the land of the midnight sun. After moving south and earning her BS in Mathematics at the University of Colorado Denver, she began her career in data science. She has since discovered a passion for empowering people and improving teams, and is excited to be part of Humans in Tech.',
        },
        {
          img: kayce,
          name: 'Kayce Danna',
          position: 'software engineer',
          bio: 'Kayce is a software engineer living in Denver, CO. After earning her Bachelors in Business Administration from the University of New Mexico she spent eight years working in the finance industry. Her eyes were opened to the vast world of software development and she knew she found her calling. So she took quit her finance career, enrolled in a web development immersive course, and a new passion was born. She thrilled to be working with Humans in Tech.'
        },
      ];

  render() {
    const mentorshipOverwriteStyle = {
        paddingTop: 0,
        paddingLeft: "3em",
        paddingRight: "3em",
    };
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
            </div>
        </div>

        <div className='content'>
            <div className='row'>
                <div className="column-full">
                    <SignUp
                        label={this.text.buttonLabel.mailingList}
                        formLink={this.text.forms.signUp}
                    />
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='row'>
                <div id='mentorship' className="column-full">
                    <Content 
                        title={this.text.content.titleMentorship} 
                    />
                    <div style={mentorshipOverwriteStyle}>
                        <Content 
                            subtitle={this.text.content.subtitle1Mentorship}
                            bodyText={this.text.content.paragraphMentorship1} 
                        />
                    </div>
                    <div style={mentorshipOverwriteStyle}>
                        <Content 
                            bodyText={this.text.content.paragraphMentorship2} 
                        />
                    </div>
                    <div style={mentorshipOverwriteStyle}>
                        <Content 
                            subtitle={this.text.content.subtitle2Mentorship}
                            bodyText={this.text.content.paragraphMentorship3} 
                        />
                    </div>
                    <div style={mentorshipOverwriteStyle}>
                        <Content 
                            subtitle={this.text.content.subtitle3Mentorship}
                            bodyText={this.text.content.paragraphMentorship3} 
                        />
                    </div>
                </div>
                <div className="column-full" style={mentorshipOverwriteStyle}>
                    <Content 
                        subtitle={this.text.content.subtitle4Mentorship}
                    />
                    <div className="list-items">
                        <li>{this.text.content.mentorshipOutcomes1}</li>
                        <li>{this.text.content.mentorshipOutcomes2}</li>
                        <li>{this.text.content.mentorshipOutcomes3}</li>
                        <li>{this.text.content.mentorshipOutcomes4}</li>
                    </div>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='row'>
                <div className="column-full">
                    <SignUp label={this.text.buttonLabel.mentorshipApplication}/>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='row'>
                <div id='meet-the-team' className="column-full">
                    <Content 
                        title={this.text.content.titleMeetTeam} 
                        bodyText={this.text.content.paragraphMeetTeam}
                     />
                </div>
            </div>
        </div>
        {this.tilesData.map((tile) => (
            <MeetTeamBlock
                key={tile.name}
                name={tile.name}
                bio={tile.bio}
                picture={tile.img}
            />
        ))}
    </div>

    );
  }
}
 
export default Landing