var apiKey = require('./../.env').apiKey;

Potd = function(){
};

Potd.prototype.getDate = function(displayDate) {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
      displayDate(response.date);
  }).fail(function(error) {
    $('.date').text("date not found");
  });
};

Potd.prototype.getTitle = function(displayTitle) {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    displayTitle(response.title);
  }).fail(function(error) {
    $('.title').text("title not found");
  });
};

Potd.prototype.getDescription = function(displayDescription) {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    displayDescription(response.explanation);
  }).fail(function(error) {
    $('.description').text("description not found");
  });
};

Potd.prototype.getHdurl = function(displayHdurl) {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {
    displayHdurl(response.hdurl);
  }).fail(function(error) {
    $('.container').append("picture not found");
  });
};

exports.potdModule = Potd;
