import Sparkline from "./Sparkline";

const Highlights = ({ trending, gainers, onViewMore }) => {
  const renderCoinCard = (coin) => (
    <div key={coin.id} className="coin-card">
      <img src={coin.image} alt={coin.name}/>
      <span>{coin.name}</span>
      <span>${coin.current_price.toFixed(2)}</span>
      <span style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </span>
      <Sparkline
        data={coin.sparkline_in_7d.price}
        positive={coin.price_change_percentage_24h >= 0}
        id={coin.id}
        width={120}
        height={40}
      />
    </div>
  );

  return (
    <div className="highlights">
      <div className="column">
        <h4>🔥 Trending</h4>
        {trending.map(renderCoinCard)}
        <button className="view-more-btn" onClick={() => onViewMore("trending")}>View More</button>
      </div>
      <div className="column">
        <h4>🚀 Top Gainers</h4>
        {gainers.map(renderCoinCard)}
        <button className="view-more-btn" onClick={() => onViewMore("gainers")}>View More</button>
      </div>
    </div>
  );
};

export default Highlights;
