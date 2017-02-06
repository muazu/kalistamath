import React, { Component } from 'react';
import ChampList from './champList';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '75%',
    height: '100%',
    overflowY: 'auto',
  },
};



export default class ClientApp extends Component {



	render() {

		const data = ChampList;

		return(
			<div style={{backgroundImage: 'https://s3-us-west-1.amazonaws.com/riot-api/img/background.jpg'}}>
				<AppBar />
				<div style={styles.root}>
				    <GridList
				      cellHeight={180}
				      cols={4}
				      padding={10}
				      style={styles.gridList}
				    >
				    <Subheader>Champions</Subheader>
				    {Object.keys(data.data).map(key => {
					const champ = data.data[key];
					return(
						<GridTile
				          key={key}
				          title={champ.name}
				          subtitle={<span><b>{champ.title}</b></span>}
				          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
				        >
				        <img src={`http://ddragon.leagueoflegends.com/cdn/7.2.1/img/champion/${champ.name.replace(/\s/g,'')}.png`} />
				        </GridTile>
					)
				})}
				    </GridList>
				</div>
			</div>
		)
	}
}

		