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
