import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()
import {BrowserRouter, Match} from 'react-router';
import './index.css';
import HomePage from './HomePage';
import GetStarted from './GetStarted';
import Summoner from './Summoner'
import Head from './Head'
import Fresh from './Fresh'

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={HomePage} />
				<Match pattern="/get-started" component={GetStarted} />
				<Match pattern="/summoner/:name" component={Fresh} />
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
