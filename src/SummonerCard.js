import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class SummonerCard extends Component {
	render() {
		return (
			<div style={{marginLeft: '30%', marginRight: '30%', textAlign: 'left',}}>
				<Card style={{backgroundColor: '#EEEEEE', marginBottom: 100}}>
				    <CardHeader
						title=""
						subtitle="Activity Summary"
						avatar="http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/588.png"
					/>
					<CardMedia
					    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
						<img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg" style={{height: '250'}} />
					</CardMedia>
					<CardTitle title="Card title" subtitle="Card subtitle" />
					<CardText>
				    	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      	Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      	Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      	Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				    </CardText>
					<CardActions>
				    	<FlatButton label="Next" />
				    </CardActions>
				</Card>
			</div>
		)
	}
}