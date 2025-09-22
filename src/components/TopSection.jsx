import Sparkline from "./Sparkline";

const TopSection = ({ coins }) => {
  const marketCapData = coins.map(c => c.market_cap);
  const volumeData = coins.map(c => c.total_volume);

  return (
    <div className="top-section">
      <div className="card">
        <h3>Market Cap</h3>
        <Sparkline data={marketCapData} positive={true} />
      </div>
      <div className="card">
        <h3>24h Volume</h3>
        <Sparkline data={volumeData} positive={true} />
      </div>
    </div>
  );
};

export default TopSection;
