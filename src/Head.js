import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';

import HeadLeft from './HeadLeft';
import HeadRight from './HeadRight';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
	viewPort: {
		backgroundColor: '#E0E0E0',
		width: '100vw',
		minHeight: '100vh',
		display: 'flex',
		flexWrap: 'wrap',
	},
	appBar: {
		backgroundColor: 'rgba(59,59,59,.9)',
	},
}

export default class Head extends Component {

	constructor() {
		super();
		this.state = {
			riotUser: {},
			summonerName: "",
			dataLoaded: false,
		}
		this.getSummonerProfile = this.getSummonerProfile.bind(this);
	}

	componentDidMount() {
		const summonerName = this.props.params.name;
		this.setState( {summonerName: summonerName} )

		const pizzy = new Promise((resolve, reject) => {
			resolve(this.getSummonerProfile())
		})
		pizzy
			.then(data => console.log(data))
			.then(data => this.setState( {riotUser: data, dataLoaded: true} ))

	}

	componentWillReceiveProps(nextProps) {
		const summonerName = nextProps.params.name;
		this.setState( {summonerName: summonerName} )

		const pizzy = new Promise((resolve, reject) => {
			resolve(this.getSummonerProfile())
		})
		pizzy
			.then(data => this.setState( {riotUser: data, dataLoaded: true} ))	
	}

	getSummonerProfile() {
		const name = this.props.params.name;
		return fetch(`/api/summoner/${name}`)
      		.then((response) => response.json())
      		.then((responseJson) => {
        		 return responseJson;
      	})
      	.catch((error) => {
        	console.error(error);
      	});
	}

	render() {

		return(
			<div>
				<AppBar style={style.appBar}/>
				<div style={style.viewPort}>
					<HeadLeft />
					<HeadRight />
				</div>	
			</div>
			
		)
	}
}

