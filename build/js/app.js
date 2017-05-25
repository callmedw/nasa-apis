(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "iZyQjY1I1JaKIv0GwiE45PAK47xp0D6if4fn99qu";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/mashup.js":2}]},{},[3]);
