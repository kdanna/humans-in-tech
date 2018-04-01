import React, { Component } from "react"
import Grid from './MeetTeamGrid'
 
class MeetTeam extends Component {
  render() {
    return (
      <div id='meet-the-team' className='content'>
        <h2>Meet the Team</h2>
        <p>Meet the people behind Humans in Tech</p>
        <Grid />
      </div>
    );
  }
}
 
export default MeetTeam;