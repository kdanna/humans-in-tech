import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from "react-router-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import GetInvolved from "./GetInvolved";
import MeetTeam from "./MeetTeam";
import Mentorship from "./Mentorship";

registerServiceWorker();

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <div className="main">
                <Route exact path="/" component={App}/>
                <Route path="/get-involved" component={GetInvolved}/>
                <Route path="/mentorship" component={Mentorship}/>
                <Route path="/meet-the-team" component={MeetTeam}/>
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
, document.getElementById('root'))

