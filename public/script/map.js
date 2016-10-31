console.log('js is linked!');

function success(position) {
  const mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '400px';
  mapcanvas.style.width = '600px';

  document.querySelector('article').appendChild(mapcanvas);

  const coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  const options = {
    zoom: 13,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  const marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });

  const request = {
    location: center,
    radius: 8047,
    types: ['cafe']
  };

  const service = new google.maps.places.PlacesService(map);
  console.log(service);

  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if(status == google.maps.places.PlacesServiceStatus.OK){
    let i;
    for(i = 0; i < results.length; i++){
      createMarker(results[i]);
    }
  }
}

// create markers on map
function createMarker(place) {
  const placeLocation = place.geometry.location;
  const marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}
