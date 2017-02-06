import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

const style = {
	headShot: {
		padding: '4%',
		display: 'flex',
		flexDirection: 'row'
	},
	sumName: {
		fontSize: '2em',
		marginLeft: '20%',
		marginTop: '4%',
		textAlign: 'start'

	},
	sumSubTitle: {
		marginLeft: '20%',
		fontSize: '1.3em',
		textAlign: 'start',
		width: '100%',
	},
	rankedPerPaper: {
		paddingTop: '1%',
		paddingBottom: '5%',
	},
	catTitles: {
		paddingLeft: '5%',
	},
	analysis: {
		display: 'flex',
		justifyContent: 'stretch',
	},
	analysisBx: {
		width: '33.33%',
		minWidth: '120px',
		paddingLeft: '5%'
	},
	test: {
		display: 'flex',
		flexDirection: 'column',
		padding: '4%',
	},
	champPaper: {
		marginTop: '3%',
	},
	rankByChamp: {
		color: 'white', 
		display: 'flex',
		padding: '2%'
	},
}

export default class HeadBodyLeft extends Component {
	render() {
		return(
			<div>
				<div style={style.headShot}>
					<img src='http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/588.png' alt="" 
						/>
						<div>
							<h2 style={style.sumName}>gypsyBelly</h2>
							<p style={style.sumSubTitle}>Level 30 &nbsp; || &nbsp; Mastery Points 72</p>
						</div>
				</div>
				<Paper style={style.rankedPerPaper}>
					<div><h4 style={style.catTitles}>Ranked Performance</h4></div>
					<div style={style.analysis}>
						<div style={style.analysisBx}><div><img src="http://placehold.it/150x150" alt=""/></div></div>
						<div style={style.analysisBx}><div><img src="http://placehold.it/150x150" alt=""/></div></div>
						<div style={style.analysisBx}><div><img src="http://placehold.it/150x150" alt=""/></div></div>
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