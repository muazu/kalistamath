import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SummonerCard from './SummonerCard';


const style = {
  app: {
    marginTop: 90,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#607D8B",
  },
  sumBtn: {
    fontSize: 20,
 },
}

export default class GetStarted extends Component {

	constructor() {
		super();
		this.state = {
			summonerInputchg: "",
			summonerName: ""
		}
		this.goToSummoner = this.goToSummoner.bind(this);
		this.handleInputChg = this.handleInputChg.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	goToSummoner(event) {
		event.preventDefault();
		const summonerName = this.summonerName.value;
		this.context.router.transitionTo(`/summoner/${summonerName}`);
	}

	handleInputChg(event) {
		this.setState( {summonerInputchg: event.target.value} );
	}

	handleSubmit(event) {
		event.preventDefault();
		const summonerName = this.state.summonerInputchg;
		this.setState( {summonerName: summonerName})
	}

	render() {
		return(
			<div>
				<AppBar
    				title="Kalista Math"
    				iconClassNameRight="muidocs-icon-navigation-expand-more"
    			/>
				<div style={style.app}>
          			<div>Enter Your Summoner Name</div>
          			<form action="" onSubmit={this.handleSubmit}>
          				<TextField
				      		hintText="ex.  Doublelift"
				      		value={this.state.summonerInputchg}
				      		onChange={this.handleInputChg}
				    	/>
				    	<br />
				    	<RaisedButton label="Submit" primary={true} style={style.sumBtn} onClick={this.handleSubmit} />
          			</form>          			
				    <br />
				    <br />
				    {this.state.summonerName ? <SummonerCard /> : ''}
        		</div>				
			</div>
		)
	}
}

GetStarted.contextTypes = {
	router: React.PropTypes.object
}