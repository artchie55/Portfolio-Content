import { useEffect, useState } from "react";

function TopGainersCard() {
  const [topGainers, setTopGainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopGainers = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1"
        );
        const data = await res.json();

        const sorted = [...data]
          .filter((coin) => coin.price_change_percentage_24h > 0)
          .sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          )
          .slice(0, 2);

        setTopGainers(sorted);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch top gainers", err);
        setLoading(false);
      }
    };

    fetchTopGainers();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading top gainers...</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md scale-125 max-647:scale-100">
      <h2 className="text-xl font-bold mb-4 text-green-700">Top Gainers (24h)</h2>
      {topGainers.map((coin) => (
        <div
          key={coin.id}
          className="flex items-center justify-between gap-4 mb-4 bg-green-50 p-3 rounded-lg hover:scale-110 transition duration-200 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <img src={coin.image} alt={coin.name} className="w-6 h-6" />
            <div>
              <div className="font-semibold">
                {coin.name} ({coin.symbol.toUpperCase()})
              </div>
              <div className="text-sm text-gray-500">
                ${coin.current_price.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="text-green-600 font-bold">
            +{coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopGainersCard;
