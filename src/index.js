import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import App from './App';
import './index.css';
import Sidebar from './Sidebar';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import LandingPage from './LandingPage'
import GetStarted from './GetStarted'
import NotFound from './NotFound'
import AppBar from 'material-ui/AppBar';




const Root = () => {
	return(
		<BrowserRouter>
			
			<div>
				<Match exactly pattern="/" component={LandingPage} />
				<Match pattern="/get-started" component={GetStarted} />
				<Match pattern="/summoner/:summonerId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}


ReactDOM.render(
	<MuiThemeProvider>
		<Root />
	</MuiThemeProvider>,
  	document.getElementById('root')
);
