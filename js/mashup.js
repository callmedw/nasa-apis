var apiKey = require('./../.env').apiKey;

function Potd(){
}

Potd.prototype.getDate = function() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    return response.date;
  }).fail(function(error) {
    $('.date').text("date not found");
  });
}

Potd.prototype.getDate = function() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    return response.date;
  }).fail(function(error) {
    $('.date').text("date not found");
  });
}

Potd.prototype.getDate = function() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    return response.date;
  }).fail(function(error) {
    $('.date').text("date not found");
  });
}

Potd.prototype.getDate = function() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    return response.date;
  }).fail(function(error) {
    $('.date').text("date not found");
  });
}

exports.potdModule = Potd;
