import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactGA from 'react-ga';

import './index.css';
import App from './App'

ReactGA.initialize('UA-121425525-1', {
    debug: true,
    titleCase: true,
  });
ReactGA.pageview(window.location.pathname + window.location.search)

//serviceWroker can only be registered on sercure sites
if(window.location.protocol === 'https:'){
    registerServiceWorker()
}

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <div className="main">
                <Route path="/" component={App}/>
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
, document.getElementById('root'))

