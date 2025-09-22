# Crypto Coin Dashboard

A simple crypto dashboard built with React that fetches live market data from the CoinGecko API. It displays all coins overview, highlights top gainers, trending coins, and provides a responsive UI similar to CoinGecko.

---

## Features

- **All Coins Overview**: Displays rank, name, symbol, price, 24h change, market cap, and volume.
- **Highlights Section**: Shows Market Cap, 24h Volume, Trending Coins, and Top Gainers.
- **Responsive Design**: Works on both desktop and mobile devices.
- **View More**: Navigate to full lists of trending and top gainers with a single click.

---

## Tech Stack

- ReactJS
- React Router
- CSS
- CoinGecko API

---

## Installation

1. Clone the repo:  
```bash
git clone https://github.com/divyalakshmi519/crypto-coin-dashboard.git
cd crypto-coin-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API

* Uses [CoinGecko API](https://www.coingecko.com/api/documentations/v3) for live crypto data.
* No API key is required for basic usage.
* Endpoints used:
  * `/coins/markets` – for all coin data
  * `/search/trending` – for trending coins
* Handles sorting and highlights (top gainers, trending coins).

---

## Live Demo

[View the app on Netlify](https://coingecko-dashboard.netlify.app/)

---

## Notes

* The project demonstrates basic React patterns, component reuse, state management with hooks, and API integration.
* Future improvements could include more filters, real-time updates, or detailed coin modals.

