import { useEffect, useState } from "react";
import CoinsTable from "../components/CoinsTable";
import Sparkline from "./Sparkline";
import { fetchCoins, fetchCategoryCoins } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [trending, setTrending] = useState([]);
  const [gainers, setGainers] = useState([]);
  const [showHighlights, setShowHighlights] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const allCoins = await fetchCoins();
      setCoins(allCoins);
      setTrending(await fetchCategoryCoins("trending", 3)); // top 3
      setGainers(await fetchCategoryCoins("gainers", 3));   // top 3
    };
    getData();
  }, []);

  const handleViewMore = (category) => {
    navigate(`/view-more/${category}`);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading">Crypto Dashboard</h1>
        <button className="toggle-btn" onClick={() => setShowHighlights(!showHighlights)}>
          {showHighlights ? "Hide Highlights" : "Show Highlights"}
        </button>
      </div>

      {showHighlights && (
        <div className="highlights-row">
          {/* Left Column: Top Section */}
          <div className="highlight-column left-column">
            <div className="highlight-card">
              <h3>Market Cap</h3>
              <Sparkline data={coins.map(c => c.market_cap)} positive={true} />
            </div>
            <div className="highlight-card">
              <h3>24h Volume</h3>
              <Sparkline data={coins.map(c => c.total_volume)} positive={true} />
            </div>
          </div>

          {/* Right Column: Trending + Top Gainers */}
          <div className="highlight-column right-column">
            <div className="highlight-card">
              <h4>🔥 Trending</h4>
              {trending.map(coin => (
                <div key={coin.id} className="coin-card">
                  <div>
                    <img src={coin.image} alt={coin.name} />
                    <span>{coin.name}</span>
                  </div>
                  <span>${coin.current_price.toFixed(2)}</span>
                  <span style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                  <Sparkline data={coin.sparkline_in_7d.price} positive={coin.price_change_percentage_24h >= 0} id={coin.id} />
                </div>
              ))}
              <button className="view-more-btn" onClick={() => handleViewMore("trending")}>View More</button>
            </div>

            <div className="highlight-card">
              <h4>🚀 Top Gainers</h4>
              {gainers.map(coin => (
                <div key={coin.id} className="coin-card">
                  <div>
                    <img src={coin.image} alt={coin.name} />
                    <span>{coin.name}</span>
                  </div>
                  <span>${coin.current_price.toFixed(2)}</span>
                  <span style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                  <Sparkline data={coin.sparkline_in_7d.price} positive={coin.price_change_percentage_24h >= 0} id={coin.id} />
                </div>
              ))}
              <button className="view-more-btn" onClick={() => handleViewMore("gainers")}>View More</button>
            </div>
          </div>
        </div>
      )}

      {/* Coins Table */}
      <CoinsTable coins={coins} />
    </div>
  );
};

export default Home;
