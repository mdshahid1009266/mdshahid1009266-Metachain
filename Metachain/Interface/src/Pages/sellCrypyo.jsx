import React, { useState } from "react";

const SellCrypto = () => {
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [cryptoType, setCryptoType] = useState("BTC");

  const handleSell = (e) => {
    e.preventDefault();
    alert(`Selling ${cryptoAmount} ${cryptoType}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sell Crypto</h2>
        <form onSubmit={handleSell}>
          <div className="mb-4">
            <label
              htmlFor="cryptoType"
              className="block text-gray-700 font-medium mb-2"
            >
              Select Cryptocurrency
            </label>
            <select
              id="cryptoType"
              value={cryptoType}
              onChange={(e) => setCryptoType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="LTC">Litecoin (LTC)</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="cryptoAmount"
              className="block text-gray-700 font-medium mb-2"
            >
              Amount to Sell
            </label>
            <input
              type="number"
              id="cryptoAmount"
              value={cryptoAmount}
              onChange={(e) => setCryptoAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full  text-white py-3 rounded-lg font-semibold  focus:outline-none gradientBtn"
          >
            Sell
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellCrypto;
