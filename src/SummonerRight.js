import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	rightSide: {
		backgroundColor: '#D1C4E9',
		flexBasis: '50%',
		flex: 1,
	},
	container: {
		marginLeft: '4%',
		marginRight: '4%',
		textAlign: 'center'
	},
	heroTitle: {
		fontSize: '3.2em',
		color: '#424242',
	},
	champSearch: {
		marginLeft: '4%',
		marginRight: '4%',
		marginBottom: '1%',
		paddingRight: '5%', 
		paddingLeft: '5%',
	},
	summonerInput: {
		width: '100%',
	},
	champList: {
		marginLeft: '4%',
		marginRight: '4%',
		display: 'flex',
		flexWrap: 'wrap',
    	height: 450,
    	overflowY: 'auto', 
	},
	champCard: {
		padding: '2%',		
		display: 'flex',
		flexBasis: '20%',
		flexDirection: 'column',
		textAlign: 'center'
	},
	champImg: {
		maxWidth: '100%',
	},
	champName: {
		marginTop: 'auto',
	},
	btnBox: {
		display: 'flex',
		justifyContent: 'center'
	},
	btn: {
		fontSize: 10,
		width: '100%',
		marginLeft: '4%',
		marginRight: '4%',
		height: 50,
		marginTop: '5%',
	},
}

export default class SummonerRight extends Component {
	render() {
		return(
			<div style={style.rightSide}>
				<div style={style.container}>
					<p style={style.heroTitle}>Choose your champion</p>
				</div>
				<Paper style={style.champSearch}>
					<form>
						<TextField
						    hintText="Search for a champion..."
						    style={style.summonerInput}
						    />
					</form>
				</Paper>
				
				<Paper style={style.champList}>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
					<div style={style.champCard}>
						<div style={style.champImg}>
							<img src="http://placehold.it/100x100" alt=""/>	
						</div>
						<div style={style.champName}>
							Name
						</div>
					</div>
				</Paper>
				<div style={style.btnBox}>
					<RaisedButton 
						label="Lock In Champion" 
						backgroundColor='rgba(255, 152, 0, 0.7)'
						style={style.btn} 
					/>	
				</div>
				
			</div>
		)
	}
}
