var apiKey = require('./../.env').apiKey;

function Potd(){
}

Potd.prototype.getPotd = function() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {

  });
}

exports.potdModule = Potd;
