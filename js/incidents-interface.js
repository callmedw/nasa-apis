var Incident =  require('./../js/incidents.js').incidentsModule;

var makeRow = function() {
  $('#table-body').append(`<tr></tr>`);
}

var displayIncidentDate = function(date){
  $('tr').last().append(`<td>${date}</td>`);
};

var displayIncidentTitle = function(title){
  $('tr').last().append(`<td>${title}</td>`);
};

var displayType = function(type){
  $('tr').last().append(`<td>${type}</td>`);
};

var displayUrl = function(url){
  $('tr').last().append(`<td><a href="${url}" target="_blank">${url}</a></td>`);
};


$(document).ready(function() {
  var incident = new Incident();
  incident.getIncidentData(makeRow, displayIncidentDate, displayIncidentTitle, displayType, displayUrl);
});
