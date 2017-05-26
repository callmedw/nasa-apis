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
    });
  }).fail(function(error) {
    $('#row-awesome').append("<tr><td>not found</td></tr>");
  });
};


Incident.prototype.initMap = function() {
  var amarillo = {lat: 35.221997, lng: -101.831297};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: amarillo
  });
  var marker = new google.maps.Marker({
    position: amarillo,
    map: map
  });
  $.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?').then(function(response) {
    response.events.forEach(function(event){
      var latLng = new google.maps.LatLng(
        event.geometries[0].coordinates[0], event.geometries[0].coordinates[1]
      );
      console.log(latLng);
      console.log(event.geometries[0].coordinates[0]);
      console.log(event.geometries[0].coordinates[1]);
      new google.maps.Marker({
        position: latLng,
        map: map
      });
    });
    // console.log(response.events[0].geometries[0].coordinates[0]);
    // console.log(response.events[0].geometries[0].coordinates[1]);
  });
};


exports.incidentsModule = Incident;
