let busIcon = L.icon({
  iconUrl: "bus.png",
  iconSize: [30, 30], // Size of the icon
  iconAnchor: [20, 20], // Point of the icon which will correspond to the marker's location
  popupAnchor: [-3, -76], // Point from which the popup should open relative to the icon
});

(function () {
  // Sets maps configuration to Halifax position, and zooms to a certain point
  let map = L.map("theMap").setView([44.650627, -63.59714], 14);

  // Create leaftlet tile layer as base map, and add it to map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Use PointToLayer to replace each point on the map with a marker used to specify the "bus icon", and update the rotation angle
  busLayer = L.geoJSON(null, {
    pointToLayer: function (geoJsonPoint, latlong) {
      return L.marker(latlong, {
        icon: busIcon,
        rotationAngle: geoJsonPoint.properties.rotationAngle,
      });
    },

    // Use onEachFeature to attach a popup to each location in our geoJSON array
    onEachFeature: function (feature, layer) {
      layer.bindPopup("Route Number: " + feature.properties.popupContent);
    },
  }).addTo(map);

  // Call moment function, set time-lapse, update map
  setInterval(moment, 3000, map);
})();

//Every location converted into a GeoJSON Point Feature
function generateGeoFromLatLong(lat, long, rotationAngle, routeNum) {
  let pointData = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [long, lat],
    },
    properties: {
      rotationAngle: rotationAngle,
      popupContent: routeNum,
    },
  };
  return pointData;
}

function moment(map) {
  // Fetching the data from hrmbusapi, and returns a response
  fetch("http://hrmbusapi.herokuapp.com/")
    .then((res) => res.json())
    .then((json) => {
      // Clears current layer of any pre-existing data
      busLayer.clearLayers();

      // Filter busses so that only routes 1-10 are shown
      let filteredData = json.entity.filter((x) => x.vehicle.trip.routeId < 11);

      // Get lat, long, angle, busID attribute values from each point in data Array
      filteredData.map((el) => {
        const lat = el.vehicle.position.latitude;
        const long = el.vehicle.position.longitude;
        const angle = el.vehicle.position.bearing;
        const busId = el.vehicle.trip.routeId; //Grabs routId to be displayed in pop-up

        // Convert each record from data Array into GeoJSON Point Feature
        let geoPoint = generateGeoFromLatLong(lat, long, angle, busId);
        // Use addData method to add each record to the bus layer
        busLayer.addData(geoPoint);
      });
    });
}
