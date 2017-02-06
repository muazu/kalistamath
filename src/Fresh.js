import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import FreshCard from './FreshCard';

const style = {
	viewport: {
		backgroundColor: '#E0E0E0',
		width: '100vw',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		border: '10px solid goldenrod'
	},
	loading: {
		textAlign: 'center',
		marginTop: '20%'
	},
}

export default class Fresh extends Component {

	constructor() {
		super();
		this.state = {
			userInputChg: "",
			summonerName: "",
			riotUser: {},
		}
		this.handleInputChg = this.handleInputChg.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getSummonerProfile = this.getSummonerProfile.bind(this)
	}

	componentDidMount() {
		const summonerName = this.props.params.name;
		this.setState( {summonerName: summonerName} );
		this.getSummonerProfile(summonerName);

	}

	handleInputChg(event) {
		this.setState( {userInputChg: event.target.value} );
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState( {riotUser: {} })
		const summonerName = this.state.userInputChg.toLowerCase();
		this.setState( {summonerName: summonerName} );
		this.getSummonerProfile(summonerName);	

		this.context.router.transitionTo(`/summoner/${summonerName}`);
	}

	getSummonerProfile(summonerName) {
		const name = summonerName.toLowerCase();
		return fetch(`/api/summoner/${name}`)
      		.then((response) => response.json())
      		.then((responseJson) => {
        		 this.setState( {riotUser: responseJson} );
      	})
      	.catch((error) => {
        	console.error(error);
      	});
	}	

	render() {

		const { riotUser } = this.state;

		let details;
		let index = Object.keys(riotUser); 
		if(index.length > 0) {
			details = riotUser[index];
		} 

		return(
			<div style={style.viewport}>
				
				{
					index.length > 0 ? 

					<FreshCard 
						handleSubmit={this.handleSubmit}
						handleInputChg={this.handleInputChg}
						userInputChg={this.state.userInputChg}
						details={details}
					/>
				:
					<div style={style.loading}>
						<CircularProgress size={200} thickness={5}/>
					</div>
				}
			</div>
		)
	}
}

Fresh.contextTypes = {
  router: React.PropTypes.object
}