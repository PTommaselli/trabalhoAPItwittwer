'use strict'

//Juliene e Pedro

const request = require('request');

class Twitter {
  constructor (chave, chave_segredo, token, token_segredo) {
    this.chave = chave;
    this.chave_segredo = chave_segredo;
    this.token = token;
    this.token_segredo = token_segredo;
  }

  search (queryString, callback) {
    const config_object_search_tweets ={
      method: 'GET',
      uri: 'https://api.twitter.com/1.1/search/tweets.json?q='+queryString,
      oauth: {
          consumer_key: this.chave,
          consumer_secret: this.chave_segredo,
          token: this.token,
          token_secret: this.token_segredo
      }
    }
    request(config_object_search_tweets, callback)
  }

  listTweetsByUsername (userName, callback) {
    const config_object_user ={
      method: 'GET',
      uri: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + userName,
      oauth: {
          consumer_key: this.chave,
          consumer_secret: this.chave_segredo,
          token: this.token,
          token_secret: this.token_segredo
      }
    }
    request(config_object_user, callback)
  }
}
module.exports = Twitter
