import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lolUsers: {},
      lolStats: [],
      lolUserMastery: null,
      userInputChg: "",
      userInput: "",
      gameType: "RankedSolo5x5"
    }
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleInputChg = this.handleInputChg.bind(this);
    this.getSummonerDetail = this.getSummonerDetail.bind(this);
    this.getStats2017 = this.getStats2017.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.handleUserSelect = this.handleUserSelect.bind(this);
    this.getTotalMastery = this.getTotalMastery.bind(this);
  }

  getSummonerDetail() {
    const API_ADD = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'
    const API_KEY = 'RGAPI-544897fd-c31c-442a-9724-912ae189dfcf'
    const SUMMONER_NAME = this.state.userInput;
    
    return fetch(`${API_ADD}${SUMMONER_NAME}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return this.setState( {lolUsers: responseJson} );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getStats2017() {
    const API_KEY = 'RGAPI-544897fd-c31c-442a-9724-912ae189dfcf'
    const SUMMONER_NAME = this.state.userInput;
    const SUMMONER_ID = this.state.lolUsers[SUMMONER_NAME].id;
    //console.log(SUMMONER_ID);
    
    return fetch(`https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/${SUMMONER_ID}/summary?season=SEASON2017&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.playerStatSummaries)
        return this.setState( {lolStats: responseJson.playerStatSummaries} )
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getTotalMastery() {
    const myHeaders = new Headers();

    const myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'no-cors',
                   cache: 'default' };
    
    return fetch(`https://na.api.pvp.net/championmastery/location/NA1/player/74430721/score?api_key=RGAPI-544897fd-c31c-442a-9724-912ae189dfcf`, myInit)
      .then((response) => console.log(response))
      // .then((responseJson) => {
      //   //console.log(responseJson.playerStatSummaries)
      //   //return this.setState( {lolUserMastery: responseJson} )
      // })
      .catch((error) => {
        console.error(error);
      });
  }

  handleUserSubmit(event) {
    event.preventDefault();
    const userInput = this.state.userInputChg.toLowerCase();
    this.setState( {userInput:  userInput}, () => {
      this.getSummonerDetail()
      .then( () => { this.getStats2017() })
      .then( () => { this.getTotalMastery() })
    })
    
  }


  handleInputChg(event) {
    this.setState( {userInputChg: event.target.value} )
  }

  isSelected(key) {
    const current = (this.state.lolStats[key].playerStatSummaryType)
    const userSelect = this.state.gameType
    if(current === userSelect) {
      return true;
    }
      return false;
  }

  handleUserSelect(event) {
    this.setState( {gameType: event.target.value} )
  }

  render() {
    
    const { userInput } = this.state;

    return (
      <div className="App">
        <div>
          <form action="" onSubmit={this.handleUserSubmit}>
            <input 
              type="text" 
              placeholder="Enter User Name" 
              value={this.state.userInputChg} 
              onChange={this.handleInputChg} 
            />
            <button>Submit</button>
          </form>
          <select defaultValue={this.state.gameType} name="" id="" onChange={this.handleUserSelect}>
            <option value="CoopVsAI">CoopVsAI</option>
            <option value="RankedFlexSR">RankedFlexSR</option>
            <option value="RankedSolo5x5">RankedSolo5x5</option>
            <option value="Unranked">Unranked</option>
            <option value="AramUnranked5x5">AramUnranked5x5</option>
          </select>
          <br />
          <div>
            <h3>Data:</h3>
            <p>User Input: {userInput}</p>
            <hr />
            <h3>Returned Data:</h3>
            { Object.keys(this.state.lolUsers).map(key => {
                const detail = this.state.lolUsers[key];
                return(
                  <ul key={key}>
                    <li>SummonerId: {detail.id}</li>
                    <li>SummonerName: {detail.name}</li>
                    <li><img src={`http://ddragon.leagueoflegends.com/cdn/7.2.1/img/profileicon/${detail.profileIconId}.png`} alt=""/></li>
                    <li>SummonerLvl: {detail.summonerLevel}</li>
                  </ul>
                )
              })
            }
          </div>
          <div>
            <h3>Summary Data:</h3>
            {
              Object.keys(this.state.lolStats).filter(this.isSelected).map(key => {
                const details = this.state.lolStats[key];
                //console.log(details.wins);
                return(
                  <ul key={key}>
                    <li>Wins: {details.wins} || Loss: {details.losses ? details.losses : 'Not-Available' } || Percent: { details.wins / (details.wins + details.losses) ? details.wins / (details.wins + details.losses) : 'Not-Available'  }</li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
