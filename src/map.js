const map = () => {
  const mapContainer = document.createElement("section");
  mapContainer.classList.add("mapContainer");
  const mapSection = document.createElement("div");
  mapSection.setAttribute("id", "map");
  mapContainer.appendChild(mapSection);
  content.appendChild(mapContainer);
};

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const poguRestaurant = { lat: -74.28, lng: 90.84 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: poguRestaurant,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: poguRestaurant,
    map: map,
  });
}

export { map, initMap };
