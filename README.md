# 📊 Real-Time Stock Broker Client Web Dashboard

A real-time stock broker client web dashboard built using **Node.js, Express, and Socket.IO**, featuring **live price updates, interactive charts, and multi-user support**.

This project simulates a stock trading dashboard where users can subscribe to selected stocks and view continuously updating prices and trend charts **without refreshing the page**.

---

## 🚀 Features

- Email-based user login (demo authentication)
- Subscribe to supported stocks: **GOOG, TSLA, AMZN, META, NVDA**
- Real-time stock price updates every second
- Interactive line charts for each subscribed stock
- Card-based, responsive dashboard UI
- Multiple users supported with independent subscriptions
- Asynchronous updates using WebSockets (no polling)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Real-time Communication:** Socket.IO (WebSockets)  
- **Frontend:** HTML, CSS, JavaScript  
- **Charts & Visualization:** Chart.js  

---

## ⚙️ System Architecture

The application follows a **client–server architecture** with **event-driven communication**.

- The server maintains persistent WebSocket connections with all clients.
- Each client subscribes to selected stocks.
- The server generates random stock prices every second.
- Updates are pushed asynchronously to subscribed clients using a **publish–subscribe model**.
- The frontend renders real-time prices and visual trend charts dynamically.

---

## ▶️ How to Run the Project

```bash
npm install
node server.js
