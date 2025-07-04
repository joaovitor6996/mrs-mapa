
// Mapa base Leaflet - simulação da COSU
const map = L.map('map').setView([-21.76, -43.34], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

// Exemplo de ponto (Juiz de Fora)
L.marker([-21.76, -43.34]).addTo(map)
  .bindPopup('<b>Juiz de Fora (FJF)</b><br>km 275,077<br>Bidirecional')
  .openPopup();
