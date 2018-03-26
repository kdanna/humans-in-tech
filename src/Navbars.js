import React from 'react'
import { NavLink, Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem'
import {deepOrangeA400} from 'material-ui/styles/colors'

import hitLogo from './images/hitLogoNoBorder.svg'


export const NavBarHome = () => (
  <div className='content'>
    <div className="App-hero">
      <img className="App-logo" src={hitLogo} alt="logo" />
    </div>
      <div className="navBar">
        <ul className="header">
            <li><NavLink to="/get-involved">Get Involved</NavLink></li>
            <li><NavLink to="/mentorsip">Mentorship Application</NavLink></li>
            <li><NavLink to="/meet-the-team">Meet the Team</NavLink></li>
        </ul>
      </div>
  </div>
);

const appBarStyle = {backgroundColor: deepOrangeA400}
const edit_style = {fontSize:16, width: 'inherit', height: 'inherit'}
export const NavBarAllElse = () => (
    <AppBar
      style={appBarStyle}
      title={'Humans in Tech'}
      iconElementLeft={
        <IconMenu
            iconButtonElement={
                <IconButton touch={true} style={edit_style}>
                  <MoreVertIcon />
                </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <MenuItem value="Home" primaryText="Home" containerElement={<Link to="/"></Link>}/>
            <MenuItem value="Get Involved" primaryText="Get Involved" containerElement={<Link to="/get-involved"></Link>}/>
            <MenuItem value="Meet the Team" primaryText="Meet the Team" containerElement={<Link to="/meet-the-team"></Link>}/>
            <MenuItem value="Mentorship" primaryText="Mentorship" containerElement={<Link to="/mentorship"></Link>}/>
        </IconMenu>
      }
    />
  ); 
