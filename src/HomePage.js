import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Fav from 'material-ui/svg-icons/action/favorite-border';
import { Link } from 'react-router';



const imgUrl = 'https://images.alphacoders.com/574/thumb-1920-574521.jpg';

const style = {
		background:{
			backgroundImage: 'url(' + imgUrl + ')',
		 	backgroundSize: '100% 100%',
		 	backgroundRepeat: 'no-repeat',
		    width: '100vw',
		    minHeight: '100vh',
		},
		container: {
			display: 'flex',
			height: '100vh',
			flexDirection: 'column',
		},
		main: {
			backgroundColor: 'rgba(59,59,59,.6)',
			flexGrow: 1,
			textAlign: 'center',
			marginTop: '-2%',
			color: '#00E5FF',
			fontSize: '3em',
		},
		mainSub: {
			fontSize: '0.6em',
			marginTop: '-4%',
			color: '#FFC107',	
		},
		appBar: {
			backgroundColor: 'rgba(59,59,59,.9)',
		},
		footer: {
			padding: '1.5%',
			backgroundColor: 'rgba(59,59,59,.9)',
			textAlign: 'right',
			color: 'lightgrey',
			fontWeight: 'thin',
		},
		paper: {
			height: 100,
			  width: 100,
			  margin: 20,
			  textAlign: 'center',
			  display: 'inline-block',
			},
		card: {
			width: '30%',
			
		},
		svg: {
			position: 'relative',
			top: '5px',
			//Left: '9px',
			color: 'red',
		},
		btn: {
			fontSize: 10,
			width: '15%',
			height: 50,
			marginTop: '5%',
		},
		foot: {
			color: '#00E5FF'
		}
};

export default class HomePage extends Component {
	render() {
		return(
			<div style={style.background}>
				<div style={style.container}>
					<div>
						<AppBar 
							style={style.appBar}/>
					</div>
					<div style={style.main}>
						<h1>Kalista Math</h1>
						<p style={style.mainSub}>Its Simple.  Do good math and earn rewards</p>
						<RaisedButton 
							containerElement={<Link to="/get-started" />}
							label="Enter" 
							backgroundColor='rgba(255, 152, 0, 0.7)'
							style={style.btn} 
							/>
					</div>
					<div style={style.footer}>
						Made with &nbsp; 
						<span><Fav style={style.svg}/></span> 
						&nbsp; by <span style={style.foot}>Kalista</span>
					</div>
				</div>	
			</div>	
		)
	}
}