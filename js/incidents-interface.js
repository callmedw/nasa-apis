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

var map;
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}


$(document).ready(function() {
  var incident = new Incident();
  incident.getIncidentData(makeRow, displayIncidentDate, displayIncidentTitle, displayType, displayUrl);
  initMap(map);
});
