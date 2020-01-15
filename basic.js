

// // Initialize the platform object:
// var platform = new H.service.Platform({
//   apikey: '31B9M1WOvs1BrJCjty0-DvXGQKKhJLPPqUX6RUPTb9I'
// });

// // Obtain the default map types from the platform object
// var maptypes = platform.createDefaultLayers();

// // Instantiate (and display) a map object:
// var map = new H.Map(
//   document.getElementById('mapContainer'),
//   maptypes.vector.normal.map,
//   {
//     zoom: 14,
//     center: { lng: 77.2169, lat: 28.6341 }
//   });

// -----------------------------------------------------------------------------------


// Create a map:
var platform = new H.service.Platform({
  apikey: '31B9M1WOvs1BrJCjty0-DvXGQKKhJLPPqUX6RUPTb9I'
});

// Define a variable holding SVG mark-up that defines an icon image:
var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="black" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.vector.normal.map,
  {
    zoom: 16,
    center: { lng: 86.13716, lat: 23.65904 }
  });

  var icon = new H.map.Icon(svgMarkup),
    coords = {lng: 77.2169, lat: 28.6341},
    marker = new H.map.Marker(coords, {icon: icon});
    

  // Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);
map.setCenter(coords);

// ----------------------------------------------------------------------------------
