import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
	form: {
		marginTop: '10%',
	},
	userCard: {
		border: '10px solid goldenrod',
		display: 'flex',
		alignSelf: 'stretch',
		justifyContent: 'center',
		margin: '10%',
		padding: '5%',
	},
	cardHead: {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '10%',
	},
}

export default class FreshCard extends Component {

	render() {

		const { details } = this.props;
		const imgUrl = `http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/${details.profileIconId}.png`;

		//console.log(details);


		return(
			<div>
				<Paper style={style.form}>
					<form action="" onSubmit={this.props.handleSubmit}>
						<TextField 
							hintText="Enter Summoner"
							onChange={this.props.handleInputChg}
							value={this.props.userInputChg}
						/>
					</form>
				</Paper>
				<div style={style.userCard}>
					<img src={imgUrl} alt=""/>
					<div style={style.cardHead}>
						<h2>{details.name}</h2>
						<p> Level {details.summonerLevel} &nbsp; || &nbsp; Mastery Score 73</p>
					</div>
				</div>
			</div>
		)
	}
}