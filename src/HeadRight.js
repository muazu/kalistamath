import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const imgUrl = 'http://orig04.deviantart.net/2b5c/f/2014/333/a/f/kalistaaaa_by_chrecand-d885zhp.png';

const style = {
	rightSide: {
		backgroundImage: 'url(' + imgUrl + ')',
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat',
		flexBasis: '50%',
		backgroundColor: '#D1C4E9',
		flex: 1,
	},
	analysis: {
		display: 'flex',
		justifyContent: 'space-around',
		//flexWrap: 'wrap',
	},
	champSearch: {
		marginLeft: '4%',
		marginRight: '6%', 
		paddingLeft: '5%',
	},
}

export default class HeadRight extends Component {

	render() {

		return(
			<div style={style.rightSide}>
				<Paper style={style.champSearch}>
					<form>
						<TextField
						    hintText="Search for a champion..."
						    style={style.summonerInput}
						    />
					</form>
				</Paper>
			</div>
		)
	}
}
