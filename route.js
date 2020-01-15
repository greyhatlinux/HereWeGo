// Instantiate a map and platform object:
var platform = new H.service.Platform({
    apikey: '31B9M1WOvs1BrJCjty0-DvXGQKKhJLPPqUX6RUPTb9I'
  });
  // Retrieve the target element for the map:
  var targetElement = document.getElementById('mapContainer');
  
  // Get the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 16,
      center: {lng: 77.21959, lat:28.63284}
    });

    // create default UI
    var ui = H.ui.UI.createDefault(map, defaultLayers);

    
    // ui.getControl('zoom');
    // ui.getControl('scalebar');



// -----------------------------------------------------------------------------------------/


// routing starts


// ----------------------------------------------------------------------------------------------------

//   // Create the parameters for the routing request:
//   var routingParameters = {
//     // The routing mode:
//     'mode': 'balanced;pedestrian',
//     // The start point of the route:
//     'waypoint0': 'geo!28.6343256785431,77.2169764378904',
//     // The end point of the route:
//     'waypoint1': 'geo!28.6274454678096,77.2075885325671',
//     // To retrieve the shape of the route we choose the route
//     // representation mode 'display'
//     'representation': 'display'
//   };
  
//   // Define a callback function to process the routing response:
//   var onResult = function(result) {
//     var route,
//       routeShape,
//       startPoint,
//       endPoint,
//       linestring;
//     if(result.response.route) {
//     // Pick the first route from the response:
//     route = result.response.route[0];
//     // Pick the route's shape:
//     routeShape = route.shape;
  
//     // Create a linestring to use as a point source for the route line
//     linestring = new H.geo.LineString();
  
//     // Push all the points in the shape into the linestring:
//     routeShape.forEach(function(point) {
//       var parts = point.split(',');
//       linestring.pushLatLngAlt(parts[0], parts[1]);
//     });
  
//     // Retrieve the mapped positions of the requested waypoints:
//     startPoint = route.waypoint[0].mappedPosition;
//     endPoint = route.waypoint[1].mappedPosition;
  
//     // Create a polyline to display the route:
//     var routeLine = new H.map.Polyline(linestring, {
//       style: { strokeColor: 'blue', lineWidth: 3 }
//     });
  
//     // Create a marker for the start point:
//     var startMarker = new H.map.Marker({
//       lat: startPoint.latitude,
//       lng: startPoint.longitude
//     });
  
//     // Create a marker for the end point:
//     var endMarker = new H.map.Marker({
//       lat: endPoint.latitude,
//       lng: endPoint.longitude
//     });
  
//     // Add the route polyline and the two markers to the map:
//     map.addObjects([routeLine, startMarker, endMarker]);
  
//     // Set the map's viewport to make the whole route visible:
//     map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
//     }
//   };
  
//   // Get an instance of the routing service:
//   var router = platform.getRoutingService();
  
//   // Call calculateRoute() with the routing parameters,
//   // the callback and an error callback function (called if a
//   // communication error occurs):
//   router.calculateRoute(routingParameters, onResult,
//     function(error) {
//       alert(error.message);
//     });





//   --------------------------------------------------------------------------------------------

// var routingParams = {
//     'mode': 'fastest;car;',
//     'start': 'geo!28.62785,77.20852',
//     'range': '300',
//     'rangetype': 'time'
//   };
  
//   // Define a callback function to process the isoline response.
//   var onResult = function(result) {
//     var center = new H.geo.Point(
//         result.response.center.latitude,
//         result.response.center.longitude),
//       isolineCoords = result.response.isoline[0].component[0].shape,
//       linestring = new H.geo.LineString(),
//       isolinePolygon,
//       isolineCenter;
  
//     // Add the returned isoline coordinates to a linestring:
//     isolineCoords.forEach(function(coords) {
//     linestring.pushLatLngAlt.apply(linestring, coords.split(','));
//     });
  
//     // Create a polygon and a marker representing the isoline:
//     isolinePolygon = new H.map.Polygon(linestring);
//     isolineCenter = new H.map.Marker(center);
  
//     // Add the polygon and marker to the map:
//     map.addObjects([isolineCenter, isolinePolygon]);
  
//     // Center and zoom the map so that the whole isoline polygon is
//     // in the viewport:
//     map.getViewModel().setLookAtData({bounds: isolinePolygon.getBoundingBox()});
//   };
  
//   // Get an instance of the routing service:
//   var router = platform.getRoutingService();
  
//   // Call the Routing API to calculate an isoline:
//   router.calculateIsoline(
//     routingParams,
//     onResult,
//     function(error) {
//     alert(error.message);
//     }
//   );

// ------------------------------------------------------------------------------------