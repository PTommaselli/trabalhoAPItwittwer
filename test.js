//Juliene e Pedro
var Twitter = require('./Twitter');

var t = new Twitter('',
                    '',
                    '',
                    '');

t.search('', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(body);
  } else {
      console.log(error);
  }
});

t.listTweetsByUsername('', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(body);
  } else {
      console.log(error);
  }
});
