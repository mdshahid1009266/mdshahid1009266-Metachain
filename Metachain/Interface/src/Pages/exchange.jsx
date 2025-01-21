import { useState } from "react";

const ExchangeComponent = () => {
  // List of supported coins
  const coins = [
    { id: "BTC", name: "Bitcoin" },
    { id: "ETH", name: "Ethereum" },
    { id: "LTC", name: "Litecoin" },
    { id: "XRP", name: "Ripple" },
    { id: "ADA", name: "Cardano" },
  ];

  // State for selected coins and amounts
  const [fromCoin, setFromCoin] = useState(coins[0].id);
  const [toCoin, setToCoin] = useState(coins[1].id);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  // Handle exchange logic
  const handleExchange = () => {
    if (!fromAmount || isNaN(fromAmount) || parseFloat(fromAmount) <= 0) {
      alert("Please enter a valid amount to exchange.");
      return;
    }

    // Simulate exchange rate (for demonstration purposes)
    const exchangeRate = 0.5; // Example: 1 BTC = 0.5 ETH
    const calculatedAmount = parseFloat(fromAmount) * exchangeRate;

    setToAmount(calculatedAmount.toFixed(6));
    alert(`Exchanged ${fromAmount} ${fromCoin} to ${calculatedAmount.toFixed(6)} ${toCoin}`);
  };

  return (
    <div id="cryptonews" className=" min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Exchange Coins
        </h1>

        {/* From Coin Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <div className="flex items-center bg-gray-100 rounded-lg p-3">
            <select
              value={fromCoin}
              onChange={(e) => setFromCoin(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none"
            >
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.id})
                </option>
              ))}
            </select>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              placeholder="Amount"
              className="ml-4 w-24 p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* To Coin Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <div className="flex items-center bg-gray-100 rounded-lg p-3">
            <select
              value={toCoin}
              onChange={(e) => setToCoin(e.target.value)}
              className="flex-1 bg-transparent focus:outline-none"
            >
              {coins.map((coin) => (
                <option key={coin.id} value={coin.id}>
                  {coin.name} ({coin.id})
                </option>
              ))}
            </select>
            <input
              type="text"
              value={toAmount}
              readOnly
              placeholder="Amount"
              className="ml-4 w-24 p-2 border-2 border-gray-200 rounded-lg focus:outline-none bg-gray-100"
            />
          </div>
        </div>

        {/* Exchange Button */}
        <button
          onClick={handleExchange}
          className="w-full mt-6 bg-[#0a011b] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
        >
          Exchange
        </button>
      </div>
    </div>
  );
};

export default ExchangeComponent;