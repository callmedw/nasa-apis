var apiKey = "iZyQjY1I1JaKIv0GwiE45PAK47xp0D6if4fn99qu";

$(document).ready(function() {
  $('#pic-button').click(function() {
    // $('body').css({'background' : 'yellow'});
    $.get('https://api.nasa.gov/planetary/apod?api_key=' + apiKey, function(response) {
      $('.start').hide();
      $('.date').append(response.date);
      $('.title').append(response.title);
      $('.description').append(response.explanation);
      $('body').css('background-image', 'url(' + response.hdurl + ')');
    });
  });
});
