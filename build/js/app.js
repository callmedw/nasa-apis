(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "iZyQjY1I1JaKIv0GwiE45PAK47xp0D6if4fn99qu";

},{}],2:[function(require,module,exports){
Incident = function(){
};

Incident.prototype.getIncidentData = function(displayIncidentData) {
  $.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?').then(function(response) {
      displayIncidentDate(response.events[0].geometries[0].date);
      displayIncidentTitle(response.events[0].title);
      displayDescription(response.events[0].categories[0].title);
      displayUrl(response.events[0].sources[0].url);
  }).fail(function(error) {
    $('#row-awesome').append("<tr><td>not found</td></tr>");
  });
};

// Incident.prototype.getIncidentTitle = function(displayIncidentTitle) {
//   $.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?').then(function(response) {
//     displayIncidentTitle(response.events[0].title);
//   }).fail(function(error) {
//     $('#row-awesome').append("<td>title not found</td>");
//   });
// };
//
// Incident.prototype.getType = function(displayDescription) {
//   $.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?').then(function(response) {
//     displayDescription(response.events[0].categories[0].title);
//   }).fail(function(error) {
//     $('#row-awesome').append("<td>type not found</td>");
//   });
// };
//
// Incident.prototype.getUrl = function(displayUrl) {
//   $.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?').then(function(response) {
//     displayUrl(response.events[0].sources[0].url);
//   }).fail(function(error) {
//     $('#row-awesome').append("<td>link not found</td>");
//   });
// };

exports.incidentsModule = Incident;

},{}],3:[function(require,module,exports){
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

},{"./../.env":1}],4:[function(require,module,exports){
var Incident =  require('./../js/incidents.js').incidentsModule;

var displayIncidentDate = function(response){
  $('#row-awesome').append(`<td>${date}</td>`);
};



  var displayIncidentTitle = function(title){
    $('#row-awesome').append(`<td>${title}</td>`);
  };

  var displayType = function(type){
    $('#row-awesome').append(`<td>${type}</td>`);
  };

  var displayUrl = function(url){
    $('#row-awesome').append(`<td>${url}</td>`);
  };
  
// var displayIncidentData = function(response){
//   response.forEach(function(event) {
//     $('#row-awesome').append(`<td>${event.date}</td>`);
//     $('#row-awesome').append(`<td>${title}</td>`);
//     $('#row-awesome').append(`<td>${type}</td>`);
//     $('#row-awesome').append(`<td>${url}</td>`);
//   });
// };

// var generateTable = function(incidents) {
//   $("#table-body").empty();
//   incidents.forEach(function(incident, i){
//     $("#event").append(`<tr><td>${date}</td><td>${title>}</td><td>${person.humidity}</td></tr>`);
//   });
// };

$(document).ready(function() {
  var incident = new Incident();
  incident.getIncidentData(displayIncidentData);
  // incident.getIncidentTitle(displayIncidentTitle);
  // incident.getType(displayType);
  // incident.getUrl(displayUrl);
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

},{"./../js/incidents.js":2,"./../js/mashup.js":3}]},{},[4]);
