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
    zoom: 15,
    center: { lng: 77.2169, lat: 28.6341 }
  });