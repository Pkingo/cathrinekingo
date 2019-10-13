function initMap() {
  var uluru = {lat: 56.1779885, lng: 9.5900413};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 16, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}

initMap();