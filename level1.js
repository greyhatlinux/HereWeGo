// Initialize the platform object:
var platform = new H.service.Platform({
  apikey: '31B9M1WOvs1BrJCjty0-DvXGQKKhJLPPqUX6RUPTb9I'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.vector.normal.map,
  {
    zoom: 14,
    center: { lng: 77.21959, lat:28.63284}
  });

  // Instantiate a circle object (using the default style):
var circle = new H.map.Circle({lng: 77.21959, lat:28.63284}, 800);

// Add the circle to the map:
map.addObject(circle);