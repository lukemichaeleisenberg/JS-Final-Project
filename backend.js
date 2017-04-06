var path = require('path');
var express = require('express')
var app = express()

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  console.log("So nu?");
  callApi('https://developer.nps.gov/api/v0/parks');
});

app.get('/getApiData', function (req, res) {
  return callApi('https://developer.nps.gov/api/v0/parks');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function callApi(url) {
  require('request').debug = true
  var request = require('request');

  var options = {
    url: 'https://developer.nps.gov/api/v0/parks/',
    headers: {
      "Authorization": '',
      'Host': 'developer.nps.gov'
    }
  };

  request.get(options, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

}
