var Incident =  require('./../js/incidents.js').incidentsModule;

var displayIncidentDate = function(date){
  $('#table-body').append(`<td>${date}</td>`);
};

var displayIncidentTitle = function(title){
  $('#table-body').append(`<td>${title}</td>`);
};

var displayType = function(type){
  $('#table-body').append(`<td>${type}</td>`);
};

var displayUrl = function(url){
  $('#table-body').append(`<td>${url}</td>`);
};


$(document).ready(function() {
  var incident = new Incident();
  incident.getIncidentData(displayIncidentDate, displayIncidentTitle, displayType, displayUrl);
});

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
    $('#incident-button').delay(1000).show(0);
  });
});
