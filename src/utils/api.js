const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchCoins = async () => {
  const res = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`
  );
  return res.json();
};

/**
 * category: "trending", "gainers", "losers"
 * limit: number of coins to return (default 3 for highlights)
 */
export const fetchCategoryCoins = async (category, limit = 3) => {
  const allCoins = await fetchCoins();
  if (category === "trending") return allCoins.slice(0, limit);
  if (category === "gainers")
    return allCoins
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      .slice(0, limit);
  if (category === "losers")
    return allCoins
      .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      .slice(0, limit);
  return allCoins.slice(0, limit);
};
