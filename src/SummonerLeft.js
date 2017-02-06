import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';


const style = {
	appBar: {
		backgroundColor: 'rgba(59,59,59,.9)',
	},
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
	headShot: {
		padding: '4%',
		display: 'flex',
		flexDirection: 'row'
	},
	sumName: {
		fontSize: '3em',
		marginLeft: '20%',
		marginTop: '4%',

	},
	sumSubTitle: {
		marginLeft: '20%',
		fontSize: '1.6em',
		width: '100%',
	},
	rankedPerPaper: {
		paddingTop: '1%',
		paddingBottom: '5%',
	},
	test: {
		display: 'flex',
		flexDirection: 'column',
		padding: '4%',
	},
	rankByChamp: {
		color: 'white',
		//backgroundColor: 'lightred', 
		display: 'flex',
		padding: '2%'
	},
	catTitles: {
		paddingLeft: '5%',
	},
	champPaper: {
		marginTop: '3%',
	}
}

export default class SummonerLeft extends Component {

	constructor() {
		super();
		this.state = {
			userInputChg: "",
			summonerName: "",
		}
	}

	render() {

		let loaded = false
		if(this.props.data) {
			loaded = true
		}


		return(
			<div style={style.leftSide}>
					<Paper 
						style={style.searchBox} 
						zDepth={2}>
						<form>
							<TextField
						      hintText="Search for a different summoner..."
						      style={style.summonerInput}
						    />
						</form>
					</Paper>
					<div style={style.headShot}>
					<img src={loaded ? `http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/${this.props.data.profileIconId}.png` : <CircularProgress /> } 
						/>
						<div>
							<h2 style={style.sumName}>{loaded ? this.props.data.name : <CircularProgress />}</h2>
							<p style={style.sumSubTitle}>Level 30 &nbsp; || &nbsp; Mastery Points 72</p>
						</div>
					</div>
					<Paper style={style.rankedPerPaper}>
						<div><h4 style={style.catTitles}>Ranked Performance</h4></div>
						<div style={{display: 'flex', justifyContent: 'space-around'}}>
							<div><img src="http://placehold.it/150x150" alt=""/></div>
							<div><img src="http://placehold.it/150x150" alt=""/></div>
							<div><img src="http://placehold.it/150x150" alt=""/></div>
						</div>
					</Paper>
					
					<div style={style.test}>
						<div><h4>Ranked Win Rate by Champion</h4></div>
						<Paper style={style.champPaper}>
						<div style={style.rankByChamp}>
							<img src="http://placehold.it/100x100" alt=""/>
							<div>Kalista</div>
						</div>
						</Paper>
						<Paper style={style.champPaper}>
						<div style={style.rankByChamp}>
							<img src="http://placehold.it/100x100" alt=""/>
							<div>Ekko</div>
						</div>
						</Paper>
						<Paper style={style.champPaper}>
						<div style={style.rankByChamp}>
							<img src="http://placehold.it/100x100" alt=""/>
							<div>Jinx</div>
						</div>
						</Paper>
					</div>
				</div>
		)
	}
}
