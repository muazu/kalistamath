import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';

import SummonerLeft from './SummonerLeft';
import SummonerRight from './SummonerRight';

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

export default class Summoner extends Component {

	constructor(props) {
		super(props);
		this.state = {
			summonerName: this.props.params.summonerName,
			lol_summonerProfile: {},
		}
		this.getSummonerProfile = this.getSummonerProfile.bind(this);
	}

	componentDidMount() {
		const pizzy = new Promise((resolve, reject) => {
			resolve(this.getSummonerProfile())
		})
		pizzy
			.then(data => this.setState( {lol_summonerProfile: data} ))
	}

	getSummonerProfile() {
		const name = this.state.summonerName;
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
			<div style={style.viewPort}>
				<AppBar style={style.appBar}/>
				<SummonerLeft 
					data={this.state.lol_summonerProfile[this.state.summonerName]}
					/>
				<SummonerRight />
			</div>
		)
	}
}

