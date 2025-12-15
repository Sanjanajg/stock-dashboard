const socket = io();
const charts = {};

function subscribe() {
  const selectedStocks = [...document.querySelectorAll('input[type=checkbox]:checked')]
    .map(cb => cb.value);

  socket.emit('subscribeStocks', selectedStocks);
  createStockCards(selectedStocks);
}

function createStockCards(stocks) {
  const cardsDiv = document.getElementById('cards');
  cardsDiv.innerHTML = '';

  stocks.forEach(stock => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${stock}</h3>
      <div class="price" id="price-${stock}">$0</div>
      <canvas id="chart-${stock}"></canvas>
    `;

    cardsDiv.appendChild(card);

    const ctx = document.getElementById(`chart-${stock}`).getContext('2d');
    charts[stock] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: stock,
          data: [],
          borderWidth: 2,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: { display: false }
        }
      }
    });
  });
}

socket.on('priceUpdate', (data) => {
  for (let stock in data) {
    const price = data[stock];
    const priceEl = document.getElementById(`price-${stock}`);
    if (priceEl) priceEl.innerText = `$${price}`;

    const chart = charts[stock];
    if (chart) {
      chart.data.labels.push('');
      chart.data.datasets[0].data.push(price);

      if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
      }

      chart.update();
    }
  }
});
