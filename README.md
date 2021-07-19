# Leaflet Homework - Visualizing Data with Leaflet

## Background

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

## Results


![Street](https://github.com/anajuarezar/leaflet-challenge/blob/main/Images/Street.png)

![Dark](https://github.com/anajuarezar/leaflet-challenge/blob/main/Images/Dark.png)

![Light](https://github.com/anajuarezar/leaflet-challenge/blob/main/Images/Street.png)

## Process

1. We  create a var called URL to save our API endpoint
2. We use d3 to retrieve the information from the URL
3. We call the function features with the data.features as parameters
4.  We need to specify the colors we will use. For this we will use the conditionals to select the color depending on the depth using a function
5.  We will create the function features that will use the var earthquakeData
6.  We will create the popup for each marker that will show the time, place, mag and depth of each earthquake
7.  We create the layer and use the onEachFeature for it to go through the array
8.  We run the onEachFeature
9.  We call the funtion that will create the map. 
10.  We define the function that will create the map.
11.  We define the layers of the map we will use.
12.  We create an object that will contain our layers
13.  We create an object to hold our overlay layer
14.  We create the map with the layers we defined.
15.  We need a control layer that will be the first to show, for this we will use leaflet.control.layers
