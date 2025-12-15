# 📊 Real-Time Stock Broker Client Dashboard

This project is a real-time stock broker client web dashboard developed using Node.js, Express, and Socket.IO.

## 🚀 Features
- Email-based user login
- Subscribe to supported stocks (GOOG, TSLA, AMZN, META, NVDA)
- Live stock price updates every second without page refresh
- Multiple users supported with independent subscriptions
- Real-time asynchronous updates using WebSockets

## 🛠️ Tech Stack
- Node.js
- Express.js
- Socket.IO
- HTML, CSS, JavaScript

## ⚙️ How It Works
The server maintains live WebSocket connections with multiple clients. Each client subscribes to selected stocks, and the server pushes updated prices asynchronously every second using a random price generator. This follows a publish–subscribe model and supports real-time updates without polling.

## ▶️ How to Run
```bash
npm install
node server.js
