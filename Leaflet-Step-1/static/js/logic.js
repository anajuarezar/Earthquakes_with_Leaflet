
// 1. We  create a var called URL to save our API endpoint
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"

// 2.  We use d3 to retrieve the information from the URL
d3.json(url).then(function(data) {

// 3. We call the function features with the data.features as parameters
features(data.features);
});

// 4.  We need to specify the colors we will use. For this we will use the conditionals to select the color depending on the depth using a function

function circleColor(d){
    if (d > 90) 
    return "#ff0000";
    else if (d > 70)
    return  "#ff6600";
    else if (d > 50)
    return "#ff9933";
    else if (d > 30)
    return "#ffcc00";
    else  return "#ffff66";
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
    radius: feature.properties.mag * 30000
  })
},

// We run the onEachFeature

onEachFeature: onEachFeature
})
// We call the funtion that will create the map. 
createMap(earthquakes);
}

function createMap(earthquakes) {

// Define streetmap and darkmap layers
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

// Define a baseMaps object to hold our base layers
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};

// Create overlay object to hold our overlay layer
var overlayMaps = {
  Earthquakes: earthquakes
};

// Create our map, giving it the streetmap and earthquakes layers to display on load
var myMap = L.map("mapid", {
  center: [
    37.09, -95.71
  ],
  zoom: 5,
  layers: [streetmap, earthquakes]
});

// Create a layer control
// Pass in our baseMaps and overlayMaps
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
}

// //-----------------------------------------------------------------------------------------

// // Creating map object
// var myMap = L.map("mapid", {
//     center: [39.981456, -106.257165],
//     zoom: 5

//   });

// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// d3.json(url).then(function(geoData) {
  
//   // Adding tile layer to the map
//   L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   }).addTo(myMap);
  
//   console.log(geoData);



//   // Loop through the cities array and create one marker for each city object
// for (var i = 0; i < geoData.length; i++) {

//     // Conditionals for countries points
//     var circleColor = "";
//     if (geoData[i].features.geometry.coordinates.depth >= -10 && geoData[i].features.geometry.coordinates.depth <= 10 ) {
//         circleColor = "#00ff99";
//     }
//     else if (geoData[i].features.geometry.coordinates.depth > 10 && geoData[i].geometry.coordinates.depth <= 30 ) {
//         circleColor = "#ffff66";
//     }
//     else if (geoData[i].features.geometry.coordinates.depth > 30 && geoData[i].features.geometry.coordinates.depth <=  50 ) {
//         circleColor = "#ffcc00";
//     }
//     else if (geoData[i].features.geometry.coordinates.depth > 50 && geoData[i].features.geometry.coordinates.depth <=  70) {
//         circleColor = "#ff9933";
//     }
//     else if (geoData[i].features.geometry.coordinates.depth > 70 && geoData[i].geometry.coordinates.depth <=  90) {
//         circleColor = "#ff6600";
//     }
//     else {
//         circleColor = "#ff0000";
//     }


    
//   // To begin with, we'll make an array containing the locations
//   var quakeLocation = [];

//   for (var i = 0; i < geoData.length; i++) {

//     // Set the data location property to a variable
//     quakeLocation = [geoData[i].coordinates.longitude, geoData[i].coordinates.latitude];

//   }

//   console.log(quakeLocation);
  
//   // Add circles to map
//   L.circleMarker(quakeLocation[i], {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: circleColor,
//     // We adjust the radius to the magnitude of the earthquake
//     radius: geoData[i].properties.mag * 30000
//   }).bindPopup("<h1>" + geoData[i].features.properties.place + "</h1> <hr> <h3> Place: " + geoData[i].features.properties.mag + "</h3>").addTo(myMap);
// }

// })


