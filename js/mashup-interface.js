var apiKey = require('./../.env').apiKey;

var Potd = require('./../js/mashup.js').potdModule;

$(document).ready(function() {
  $('#pic-button').click(function() {
    var newPotd = new Potd;
    //prototype call would go here
    $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey, function(response) {
      $('.start').hide();
      $('.date').append(response.date);
      $('.title').append(response.title);
      $('.description').append(response.explanation);
      $('body').css('background-image', 'url(' + response.hdurl + ')');
    }).fail(function(error) {
      $('.description').text("failure!");
    });
  });
});
