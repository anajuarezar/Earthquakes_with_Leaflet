# Visualizing Data with Leaflet

## Background

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Results


![Street](https://github.com/anajuarezar/leaflet-challenge/blob/main/Images/Street.png)

![Dark](https://github.com/anajuarezar/leaflet-challenge/blob/main/Images/Dark.png)

![Light](https://github.com/anajuarezar/leaflet-challenge/blob/main/Images/Light.png)

## Process

1. In order to obtain the data we will map, we need to use an API to connect with the website. For this, we  create a var called URL to save our API endpoint (the request).
2. The next step is to retreive the data. For this, we will use d3, D3.JSON allows us to bring the data in a json format. And, since this is the data we will use for the next step, they are englobed in this same function. This means that wwe will also open a function using this data that will contain the following step. 
3. Now, in order to create the map using the specific features we give it, we need to call the function FEATURES (keep in mind that we haven't define it, but we call it here in order to use the data we retrieved) using as the parameter "data.features"
4.  Next, we are going to create another function called "CircleColor" that will establish the parameters that will define the colors scheme that will represent the depth of each earthquake. To do this, we will use a conditional function and determine the range that will correspond to each color. 
5.  Now, it's time to define the "Features" function that will use a new variable called EarthquakeData
7.  We will create the function features that will use the var earthquakeData
8.  We will create the popup for each marker that will show the time, place, mag and depth of each earthquake
9.  We create the layer and use the onEachFeature for it to go through the array
10.  We run the onEachFeature
11.  We call the funtion that will create the map. 
12.  We define the function that will create the map.
13.  We define the layers of the map we will use.
14.  We create an object that will contain our layers
15.  We create an object to hold our overlay layer
16.  We create the map with the layers we defined.
17.  We need a control layer that will be the first to show, for this we will use leaflet.control.layers
