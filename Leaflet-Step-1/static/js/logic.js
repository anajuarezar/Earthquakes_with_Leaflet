// Creating map object
var myMap = L.map("mapid", {
    center: [39.981456, -106.257165],
    zoom: 5

  });

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson";

d3.json(url).then(function(geoData) {
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  // console.log(geoData);



  // Loop through the cities array and create one marker for each city object
for (var i = 0; i < geoData.length; i++) {

    // Conditionals for countries points
    var color = "";
    if (geoData[i].features.geometry.coordinates.depth >= -10 && geoData[i].features.geometry.coordinates.depth <= 10 ) {
      color = "#00ff99";
    }
    else if (geoData[i].features.geometry.coordinates.depth > 10 && geoData[i].geometry.coordinates.depth <= 30 ) {
      color = "#ffff66";
    }
    else if (geoData[i].features.geometry.coordinates.depth > 30 && geoData[i].features.geometry.coordinates.depth <=  50 ) {
      color = "#ffcc00";
    }
    else if (geoData[i].features.geometry.coordinates.depth > 50 && geoData[i].features.geometry.coordinates.depth <=  70) {
        color = "#ff9933";
    }
    else if (geoData[i].features.geometry.coordinates.depth > 70 && geoData[i].geometry.coordinates.depth <=  90) {
        color = "#ff6600";
    }
    else {
      color = "#ff0000";
    }


    
  // To begin with, we'll make an array containing the locations
  var quakeLocation = [];

  for (var i = 0; i < geoData.length; i++) {

    // Set the data location property to a variable
    quakeLocation = [geoData[i].coordinates.longitude, geoData[i].coordinates.latitude];

    if (quakeLocation) {

        L.circleMarker(quakeLocation[i], {
            fillOpacity: 0.75,
            color: "white",
            fillColor: color,
            // We adjust the radius to the magnitude of the earthquake
            radius: geoData[i].properties.mag / 10
          }).bindPopup("<h1>" + geoData[i].features.properties.place + "</h1> <hr> <h3> Place: " + geoData[i].features.properties.mag + "</h3>").addTo(myMap);

    }

  }
  
}

})
