var Potd = require('./../js/mashup.js').potdModule;

var displayDate = function(date){
  $('.date').text(date);
};

var displayTitle = function(title){
  $('.title').text(title);
};

var displayDescription = function(description){
  $('.description').text(description);
};

var displayHdurl = function(hdurl){
  $('body').css('background-image', 'url(' + hdurl + ')');
};

$(document).ready(function() {
  $('#pic-button').click(function() {
    var newPotd = new Potd();
    $('.start').hide();
    newPotd.getDate(displayDate);
    newPotd.getTitle(displayTitle);
    newPotd.getDescription(displayDescription);
    newPotd.getHdurl(displayHdurl);
  });
});
