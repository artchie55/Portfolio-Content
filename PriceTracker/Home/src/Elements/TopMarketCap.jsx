import { useEffect, useState } from "react";

function TopMarketCap() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1"
        );
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch market cap data", err);
        setLoading(false);
      }
    };

    fetchTopCoins();
  }, []);

  const getPriceColor = (coin) => {
    if (coin.price_change_percentage_24h > 0) return "text-green-600";
    if (coin.price_change_percentage_24h < 0) return "text-red-600";
    return "";
  };

  if (loading) return <p className="text-center mt-8">Loading top market cap coins...</p>;

  return (
    <div className="p-6 max-w-[1000px] mx-auto scale-115 max-647:scale-100 overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-4 text-[#f6339b] tracking-[1.5px]">Top 15 Cryptos by Market Cap</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2 max-647:hidden">Market Cap</th>
            <th className="p-2 max-770:hidden">% Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="hover:bg-gray-50 hover:scale-105 transition duration-200 cursor-pointer hover:brightness-90">
              <td className="p-2">{coin.market_cap_rank}</td>
              <td className="p-2 flex items-center gap-2">
                <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td className={`p-2 ${getPriceColor(coin)}`}>
                ${coin.current_price.toLocaleString()}
              </td>
              <td className="p-2 max-647:hidden">${coin.market_cap.toLocaleString()}</td>
              <td
                className={`p-2 font-medium max-770:hidden ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopMarketCap;
