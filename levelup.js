// Create a Platform object (one per application):
var platform = new H.service.Platform({
    apikey: '31B9M1WOvs1BrJCjty0-DvXGQKKhJLPPqUX6RUPTb9I'
  });
  
  // Get an object containing the default map layers:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map using the vecor map with the
  // default style as the base layer:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 16,
      center: {lng: 77.21959, lat:28.63284}
    });

    var ui = H.ui.UI.createDefault(map, defaultLayers);
  

var style = `
sources:
    omv:
        type: OMV
        max_zoom: 17
        min_display_zoom: 1
# global description of the map, in this example
# the map background color is white
scene:
    background:
        color: [1.000, 1.000, 1.000, 1.00]

# section contains the style information for the layers
# that are present on the map
layers:
    # user defined name of the rendering layer
    water_areas:
        # the section defines where the rendering layer takes
        # its data from source: omv is mandatoru for the Vector Tile API
        # layer: water specifies what vector layer is taken
        # for the rendering see REST API documentation for the
        # list of available layers.
        data: {source: omv, layer: water}
        # section defines how to render the layer
        draw:
            polygons:
                order: 1 # z-order of the layer
                color: [0.055, 0.604, 0.914, 1.00]
    road:
        data: {source: omv, layer: roads}
        draw:
            lines:
                order: 2
                color: [0.561, 0.561, 0.561, 1.00]
                # the width is set in the world meters
                width: 15
        major_road:
            # the filter section narrows down to what features of the
            # data layer the style must be applied to
            filter:
                kind: 'major_road'
            draw:
                lines:
                    color: [0.882, 0.553, 0.086, 1.00]
                    # the width is set in the screen pixels
                    width: 5px
`;

// provided that map was instantiated with the vector layer
// as a base layer
var baseLayer = map.getBaseLayer();
baseLayer.getProvider().setStyle(new H.map.Style(style));