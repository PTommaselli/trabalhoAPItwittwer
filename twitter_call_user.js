//twitter_call_user.js

var request = require('request');
var access_token = '997465775790272512-pV3jyFxmzvWQLwWSheA6GPH8VauxdaR';
var access_token_secret = '4xQrsHTb1KYDVn6UzAk36vyXiCw7wULHJuikMBwzfbbqt';
var consumer_key = 'wpTXALbOoY2um8aXNffGYf7vS';
var consumer_secret = '	dljaRyfD3EFAcyJiPz4SvN4SaG6FPFCAR0PpyNEgC6BDmVXVVq';

var authorization_request_data = {
  method: 'GET',
  uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name= ',
  oauth: {
      consumer_key: consumer_key,
      consumer_secret: consumer_secret,
      token: access_token,
      token_secret: access_token_secret
    }
}

function read_twitter_search_response(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
  }
}

request(authorization_request_data, read_twitter_search_response);
