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
