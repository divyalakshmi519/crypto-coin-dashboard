import Sparkline from "./Sparkline";

const CoinsTable = ({ coins }) => (
  <table className="coins-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Coin</th>
        <th>Price</th>
        <th>1h %</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>24h Volume</th>
        <th>Market Cap</th>
        <th>Last 7 Days</th>
      </tr>
    </thead>
    <tbody>
      {coins.map((coin) => (
        <tr key={coin.id}>
          <td>{coin.market_cap_rank}</td>
          <td>
            <img src={coin.image} />
            {coin.name} ({coin.symbol.toUpperCase()})
          </td>
          <td>${coin.current_price.toLocaleString()}</td>
          <td style={{ color: coin.price_change_percentage_1h_in_currency >= 0 ? "green" : "red" }}>
            {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
          </td>
          <td style={{ color: coin.price_change_percentage_24h >= 0 ? "green" : "red" }}>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </td>
          <td style={{ color: coin.price_change_percentage_7d_in_currency >= 0 ? "green" : "red" }}>
            {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
          </td>
          <td>${coin.total_volume.toLocaleString()}</td>
          <td>${coin.market_cap.toLocaleString()}</td>
          <td><Sparkline
  data={coin.sparkline_in_7d.price}
  positive={coin.price_change_percentage_7d_in_currency >= 0}
  id={coin.id}
  width={100}   // smaller for table
  height={30}
/>

</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CoinsTable;
