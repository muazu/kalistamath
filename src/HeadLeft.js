import React, { Component } from 'react';

import HeadBodyLeft from './HeadBodyLeft';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

const imgUrl = 'https://s3-us-west-1.amazonaws.com/riot-api/img/background.jpg';

const style = {
	leftSide: {
		flexBasis: '50%',
		backgroundColor: '#B2EBF2',
		flex: 1,
	},
	searchBox: {
		paddingLeft: '4%',
		paddingRight: '4%',
		paddingTop: '1%',
		paddingBottom: '1%',
	},
	summonerInput: {
		width: '100%',
	},
	loading: {
		textAlign: 'center',
		marginTop: '20%'
	}
}

export default class HeadLeft extends Component {

	constructor() {
		super();
		this.state = {
			userInputChg: "",
			summonerName: "",
		}
		this.handleInputChg = this.handleInputChg.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// <div style={style.loading}>
	// 	{ <CircularProgress size={200} thickness={5}/>	}
	// </div>

	handleInputChg(event) {
		const userInputChg = event.target.value;
		this.setState( {userInputChg: userInputChg} )
	}

	handleSubmit(event) {
		event.preventDefault();
		const summonerName = this.state.userInputChg.toLowerCase();
		this.setState( {summonerName: summonerName} );
		this.context.router.transitionTo(`/summoner/${summonerName}`);
		
	}


	render() {

		return(
			<div style={style.leftSide}>
				<Paper 
					style={style.searchBox} 
					zDepth={2}>
					<form onSubmit={this.handleSubmit}>
						<TextField
					      hintText="Search for a different summoner..."
					      style={style.summonerInput}
					      onChange={this.handleInputChg}
					      value={this.state.userInputChg}
					    />
					</form>
				</Paper>
				<HeadBodyLeft />
			</div>
		)
	}
}

HeadLeft.contextTypes = {
  router: React.PropTypes.object
}

