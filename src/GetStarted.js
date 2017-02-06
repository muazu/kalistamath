import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const imgUrl = 'http://vignette3.wikia.nocookie.net/leagueoflegends/images/d/d3/Summoners_rift_platform.png/revision/latest?cb=20160216121609';

const style = {
	background:{
			backgroundImage: 'url(' + imgUrl + ')',
		 	backgroundSize: '100% 100%',
		 	backgroundRepeat: 'no-repeat',
		    width: '100vw',
		    minHeight: '100vh',
		    backgroundColor: 'rgba(59,59,59,.6)',
	},
	container: {
		//width: '100vw',
		//minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	pageTitle: {
		marginTop: '15%',
		marginBottom: '7.5%',
		fontSize: '4em',
		color: '#FFAB40',
		textAlign: 'center',
	},
	appBar: {
		backgroundColor: 'rgba(59,59,59,.9)',
	},
	form: {
		padding: '2%',
	},
	btnBox: {
		alignText: 'center',
	},
	btn: {
		fontSize: 10,
	},
}

export default class GetStarted extends Component {

	constructor() {
		super();
		this.state = {
			summonerName: "",
			userInputChg: "",
		}
		this.handleInputChg = this.handleInputChg.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChg(event) {
		this.setState( {userInputChg: event.target.value} )
	}

	handleSubmit(event) {
		event.preventDefault();
		const summonerName = this.state.userInputChg.toLowerCase();
		this.setState( {summonerName: summonerName} );
		this.context.router.transitionTo(`/summoner/${summonerName}`);
	}

	render() {
		return(
			<div style={style.background}>
				<AppBar style={style.appBar}/>
				<div style={style.container}>
					<div>
						<h2 style={style.pageTitle}>Enter Your Summoner Name</h2>
					</div>
					<Paper>
						<form 
							style={style.form}
							onSubmit={this.handleSubmit}>
							<TextField
      							hintText="ex. Doublelift"
      							underlineStyle={{width: '95%'}}
      							onChange={this.handleInputChg}
      							value={this.state.userInputChg}
      						/>
    						<div style={style.btnBox}>
								<RaisedButton 
									label="Submit" 
									primary={true} 
									style={style.btn}
									fullWidth={true}
								/>
							</div>
						</form>
    				</Paper>
				</div>	
			</div>
		)
	}
}

GetStarted.contextTypes = {
  router: React.PropTypes.object
}