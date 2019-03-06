
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(42.056551, -87.675246),
  zoom:12,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
    
    google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(map, event.latLng);
});

google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(map, event.latLng);
});

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}

function searchBar() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "search");
  document.body.appendChild(x);
}