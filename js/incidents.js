Incident = function(){
};

Incident.prototype.getIncidentData = function(makeRow, displayIncidentDate, displayIncidentTitle, displayType, displayUrl) {
  $.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?').then(function(response) {
    response.events.forEach(function(event){
      makeRow();
      displayIncidentDate(event.geometries[0].date);
      displayIncidentTitle(event.title);
      displayType(event.categories[0].title);
      displayUrl(event.sources[0].url);
    })
  }).fail(function(error) {
    $('#row-awesome').append("<tr><td>not found</td></tr>");
  });
};


exports.incidentsModule = Incident;
