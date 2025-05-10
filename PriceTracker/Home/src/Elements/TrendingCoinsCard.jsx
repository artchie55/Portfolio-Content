import { useEffect, useState } from "react";

function TrendingCoinsCard() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const data = await res.json();
        const top2 = data.coins.slice(0, 2).map((item) => item.item);
        setTrendingCoins(top2);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch trending coins", err);
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading trending coins...</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md mt-6 scale-125 max-647:scale-100">
      <h2 className="text-xl font-bold mb-4 text-[#f6339b]">Trending Coins</h2>
      {trendingCoins.map((coin) => (
        <div
          key={coin.id}
          className="flex items-center justify-between gap-4 mb-4 bg-blue-50 p-3 rounded-lg hover:scale-110 transition duration-200 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <img src={coin.small} alt={coin.name} className="w-6 h-6" />
            <div>
              <div className="font-semibold">
                {coin.name} ({coin.symbol.toUpperCase()})
              </div>
              <div className="text-sm text-gray-500">Rank: {coin.market_cap_rank}</div>
            </div>
          </div>
          <div className="text-[#f6339b] font-semibold">#{coin.score + 1}</div>
        </div>
      ))}
    </div>
  );
}

export default TrendingCoinsCard;
