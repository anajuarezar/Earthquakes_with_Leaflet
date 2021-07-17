// Creating map object
var myMap = L.map("mapid", {
    center: [39.981456, -106.257165],
    zoom: 5

  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  var geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson";

  // Loop through the cities array and create one marker for each city object
for (var i = 0; i geoData.length; i++) {

    // Conditionals for countries points
    var color = "";
    if (geoData[i].features.properties.mag >= -10 && geoData[i].features.properties.mag <= 10 ) {
      color = "#00ff99";
    }
    else if (geoData[i].features.properties.mag > 10 && geoData[i].features.properties.mag <= 30 ) {
      color = "#ffff66";
    }
    else if (geoData[i].features.properties.mag > 30 && geoData[i].features.properties.mag <=  50 ) {
      color = "#ffcc00";
    }
    else if (geoData[i].features.properties.mag > 50 && geoData[i].features.properties.mag <=  70) {
        color = "#ff9933";
    }
    else if (geoData[i].features.properties.mag > 70 && geoData[i].features.properties.mag <=  90) {
        color = "#ff6600";
    }
    else {
      color = "#ff0000";
    }


}
