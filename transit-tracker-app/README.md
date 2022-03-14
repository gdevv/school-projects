# 🚍 transit-tracker-app

## Table of Contents
[About](#about)\
[Installation](#installation)\
[Documentation](#documentation)\
[Author](#author)\
[License](#license)

## About

### Overview
For our final assignment in Front-End Development, we were tasked with using Leaflet.js - a leading open-source JavaScript library for mobile-friendly interactive maps - to fetch and display real-time bus-data through [Halifax Transit open data](https://www.halifax.ca/home/open-data/halifax-transit-open-data). 

### Requirements
* Display a map in the browser.
* Fetch real-time transit data information data from a publicly available API. 
* Filter the raw data to a subset with specific criteria.
* Convert the filtered API data into GeoJSON format.
* Plot markers on the map to display the current position of vehicles.
* Add functionality that will cause the map to auto refresh after a specified interval of time.

### Additional Functionality
* Custom Vehicle Icon – Update your map to use one of the provided vehicle icons as markers or choose one of your own.
* Rotate Vehicle Icon – Rotate each vehicle marker to visually indicate the direction that it is currently travelling.
* Marker popups – Leverage a click event to fill a popup with some of the additional data provided by the API.

## Installation
Install dependencies.
```
npm install
npm install --save @types/geojson
npm install --save @types/leaflet
```
## Documentation
![Image](https://user-images.githubusercontent.com/72951538/158186277-1fc4c1ff-b41f-4177-9712-bee7ff135fbf.png)

## Author
### Georgie Deverill
[GitHub](https://github.com/gdevv)\
[LinkedIn](https://www.linkedin.com/in/georgie-deverill-044833121/)

## License
Distributed under the [GNU General Public License version 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
