
// 1. We  create a var called URL to save our API endpoint
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"

// 2.  We use d3 to retrieve the information from the URL
d3.json(url).then(function(data) {

// 3. We call the function features with the data.features as parameters
features(data.features);
});

// 4.  We need to specify the colors we will use. For this we will use the conditionals to select the color depending on the depth using a function


function circleColor(d){
    if (d >= -10 && d <=10) 
    return "#00ff99";
    else if (d > 10 && d <= 30)
    return  "#ffff66";
    else if (d > 30 && d <= 50)
    return "#ffcc00";
    else if (d > 50 && d <= 70)
    return "#ff9933";
    else if (d <= 900)
    return "#ff6600"
    else  return "#ff0000";
}

// We will create the function features that will use the var earthquakeData

function features(earthquakeData) {

// We will create the popup for each marker that will show the time, place, mag and depth of each earthquake
function onEachFeature(feature, layer) {
  layer.bindPopup("<h3>" + feature.properties.place +
    "</h3><hr><p>" + new Date(feature.properties.time) + "</p> " + "<hr> Magnitude "+ feature.properties.mag + "<hr> Depth " + feature.geometry.coordinates[2]);
}

// We create the layer and use the onEachFeature for it to go through the array
var earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, quakeLocation){
        return new L.circle(quakeLocation, {
    fillOpacity: 0.75,
    color: "white",
    // We use the function we created for the color
    fillColor: circleColor(feature.geometry.coordinates[2]),
    // We use the magnitude to define the radius
    radius: feature.properties.mag * 20000
  })
},

// We run the onEachFeature

onEachFeature: onEachFeature
})
// We call the funtion that will create the map. 
createMap(earthquakes);
}

// We define the function that will create the map.
function createMap(earthquakes) {

// We define the layers of the map we will use. 
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// We create an object that will contain our layers,
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// We create an object to hold our overlay layer
var overlayMaps = {
  Earthquakes: earthquakes
};

// We create the map with the layers we defined. 
var myMap = L.map("mapid", {
  center: [
    37.09, -95.71
  ],
  zoom: 5,
  layers: [streetmap, earthquakes]
});

// We need a control layer that will be the first to show, for this we will use leaflet.control.layers
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
}

