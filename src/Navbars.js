import React from 'react'
import { HashLink } from 'react-router-hash-link';

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem'
import {grey800, grey50} from 'material-ui/styles/colors'

import hitLogo from './images/hitLogoNoBorderOrange.svg'


export const HeroBlock = () => (
  <div className='heroContent'>
    <div className="heroImg">
      <img className="logo" src={hitLogo} alt="logo" />
    </div>
  </div>
);

const appBarStyle = {backgroundColor: grey800, position: "fixed", top: 0}
const edit_style = {fontSize:16, width: 'inherit', height: 'inherit'}
export const NavBar = () => (
    <AppBar
      style={appBarStyle}
      title={''}
      iconElementLeft={
        <IconMenu
            iconButtonElement={
                <IconButton touch={true} style={edit_style}>
                  <MoreVertIcon color={grey50} />
                </IconButton>
            }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
            <MenuItem value="Landing" primaryText="Home" containerElement={<HashLink to="#root"></HashLink>}/>
            <MenuItem value="Get Involved" primaryText="Get Involved" containerElement={<HashLink to="#get-involved"></HashLink>}/>
            <MenuItem value="Mentorship" primaryText="Mentorship" containerElement={<HashLink to="#mentorship"></HashLink>}/>
            <MenuItem value="Meet the Team" primaryText="Meet the Team" containerElement={<HashLink to="#meet-the-team"></HashLink>}/>
        </IconMenu>
      }
    />
  ); 
