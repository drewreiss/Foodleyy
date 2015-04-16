//var map;
//var infowindow;
//
//function initialize() {
//  var champaignurbana = new google.maps.LatLng(40.109763, -88.227339);
//
//  map = new google.maps.Map(document.getElementById('map-canvas'), {
//    center: champaignurbana,
//    zoom: 16
//  });
//
//  var request = {
//    location: champaignurbana,
//    radius: 1500,
//    types: ['restaurant', 'food', 'meal_delivery', 'meal_takeaway', 'cafe']
//  };
//  infowindow = new google.maps.InfoWindow();
//  var service = new google.maps.places.PlacesService(map);
//  service.nearbySearch(request, callback);
//}
//
//function callback(results, status) {
//  if (status == google.maps.places.PlacesServiceStatus.OK) {
//    for (var i = 0; i < results.length; i++) {
//      createMarker(results[i]);
//    }
//  }
//}
//
//function createMarker(place) {
//  var placeLoc = place.geometry.location;
//  var marker = new google.maps.Marker({
//    map: map,
//    position: place.geometry.location
//  });
//
//  google.maps.event.addListener(marker, 'click', function() {
//    infowindow.setContent(place.name);
//    infowindow.open(map, this);
//  });
//}
//
//google.maps.event.addDomListener(window, 'load', initialize);