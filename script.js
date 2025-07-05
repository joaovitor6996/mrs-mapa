const mapa = L.map('map').setView([-21.76, -43.35], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(mapa);

// Renderiza a malha da Linha do Centro (dados.js)
dadosMalha.forEach((ponto, i) => {
  const popupInfo = `
    <strong>${ponto.nome}</strong><br>
    Sigla: ${ponto.sigla}<br>
    KM: ${ponto.km}<br>
    Tipo: ${ponto.tipo_linha}<br>
    Sentido: ${ponto.sentido}<br>
    Sinalização: ${ponto.sinalizacao}
  `;

  L.circleMarker([ponto.lat, ponto.lng], {
    color: 'yellow',
    radius: 6,
    fillOpacity: 0.9
  }).bindPopup(popupInfo).addTo(mapa);

  if (i < dadosMalha.length - 1) {
    const prox = dadosMalha[i + 1];
    L.polyline([
      [ponto.lat, ponto.lng],
      [prox.lat, prox.lng]
    ], { color: 'yellow' }).addTo(mapa);
  }
});

const adminBtn = document.getElementById('adminBtn');
const adminPanel = document.getElementById('adminPanel');

adminBtn.addEventListener('click', () => {
  const senha = prompt('Digite a senha de admin:');
  if (senha === 'Adminmrs2025') {
    adminPanel.style.display = 'block';
  } else {
    alert('Senha incorreta.');
  }
});
