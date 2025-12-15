const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const SUPPORTED_STOCKS = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];
let stockPrices = {};

// initialize random prices
SUPPORTED_STOCKS.forEach(stock => {
  stockPrices[stock] = Math.floor(Math.random() * 1000) + 100;
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('subscribeStocks', (stocks) => {
    socket.subscribedStocks = stocks;
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// update prices every second
setInterval(() => {
  SUPPORTED_STOCKS.forEach(stock => {
    stockPrices[stock] += Math.floor(Math.random() * 10 - 5);
  });

  io.sockets.sockets.forEach(socket => {
    if (socket.subscribedStocks) {
      let updates = {};
      socket.subscribedStocks.forEach(stock => {
        updates[stock] = stockPrices[stock];
      });
      socket.emit('priceUpdate', updates);
    }
  });
}, 1000);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


