// map-omgeving.js - Toont locaties relevant voor mijn portfolio

// Initialiseer de kaart gecentreerd op de locatie van de cirkel
let map = L.map('portfolioMap').setView([51.10523726929393, 4.366276361894496], 15); // Centreer op de locatie van de cirkel

// Basislaag met OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 16
}).addTo(map);

// Belangrijke locaties voor mijn portfolio
let locations = {

    thuis: {
        coords: [51.10523726929393, 4.366276361894496], // thuis
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

// Voeg een cirkel toe om het aangegeven gebied te markeren
L.circle([51.1053212,4.3664493], {              // Coördinaten van de blauwe pijl
    color: 'red',                               // Kleur van de cirkelrand
    fillColor: '#00BFFF',                       // Kleur van de cirkelvulling
    fillOpacity: 0.2,                           // Transparantie van de vulling
    radius: 150                                 // Straal van de cirkel in meters
}).addTo(map).bindPopup("Gebied Woonplaats");   // Popup met uitleg
