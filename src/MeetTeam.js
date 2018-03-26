import React, { Component } from "react"
import { NavBarAllElse } from './Navbars'
import Grid from './MeetTeamGrid'
 
class MeetTeam extends Component {
  render() {
    return (
      <div className='meetTeam'>
        <NavBarAllElse />
        <h2>Meet the Team</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <Grid />
      </div>
    );
  }
}
 
export default MeetTeam;