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
