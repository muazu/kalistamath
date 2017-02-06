const express = require('express');
const request = require('request');

const app = express();

const API_KEY = 'RGAPI-544897fd-c31c-442a-9724-912ae189dfcf';
let summonerName = {};

app.set('port', (process.env.PORT || 4000));


app.get('/api/summoner/:name', function (req, res, next) {
	const name = req.params.name;
  	request(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${name}?api_key=${API_KEY}`, function (error, response, body) {
  	summonerName = body;
  	next();
  })
}, function (req, res) {
  res.send(summonerName);
})


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
