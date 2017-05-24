(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "iZyQjY1I1JaKIv0GwiE45PAK47xp0D6if4fn99qu";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Potd(){
}

Potd.prototype.getPotd = function() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey).then(function(response) {

  });
}

exports.potdModule = Potd;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/mashup.js":2}]},{},[3]);
