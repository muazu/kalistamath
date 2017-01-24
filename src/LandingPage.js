import React from 'react';
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  app: {
    marginTop: 90,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#607D8B",
  },
  heroSub: {
    fontSize: 30,
    color: "#FFC400"
  },
  heroBtn_box: {
    textAlign: 'center',
    margin: 50,
  },
  heroBtn: {    
    height: 75,
    width: 150,
    textAlign: "center"
  }
}

export default class LandingPage extends  React.Component {

	constructor() {
		super();
		this.goToGetStarted = this.goToGetStarted.bind(this);
	}

	goToGetStarted() {
		this.context.router.transitionTo('/get-started');		
	}

	render() {
		return(
			<div>
				<AppBar
    				title="Kalista Math"
    				iconClassNameRight="muidocs-icon-navigation-expand-more"
    			/>
				<div style={style.app}>
          			<div>Welcome to Kalista Math</div>
          			<p style={style.heroSub}>Its simple.  Do good math, earn reward points!</p>                    
        		</div>   
				<div style={style.heroBtn_box}>
          			<RaisedButton 
            			label="Get Started" 
            			labelStyle={{fontSize: 15}}            		
            			primary={true} 
            			style={style.heroBtn}
            			onClick={this.goToGetStarted} 
          			/>    
        		</div>
			</div>
		)
	}
}

LandingPage.contextTypes = {
	router: React.PropTypes.object
}