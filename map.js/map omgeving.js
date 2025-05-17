// map-omgeving.js - Toont locaties relevant voor mijn portfolio
 
// Initialiseer de kaart gecentreerd op Peperfabriek Antwerpen
let map = L.map('portfolioMap').setView([51.22000, 4.40000], 15);

// Basislaag met OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(map);

// Belangrijke locaties voor mijn portfolio
let locations = {

    thuis: {
        coords: [51.21000, 4.41000], // Vervang met je eigen coördinaten
        popup: "<b>Woonplaats</b>"
    }
};

// Voeg markeringen toe voor elke locatie
Object.values(locations).forEach(loc => {
    L.marker(loc.coords)
        .addTo(map)
        .bindPopup(loc.popup);
});

// Verbind de locaties met een lijn (optioneel)
let locArray = Object.values(locations).map(l => l.coords);
L.polyline(locArray, {color: '#e60005', weight: 2}).addTo(map);

// Zoom level aanpassen om alle punten te zien
map.fitBounds(locArray);