import React from "react";

const Wallet = () => {
    // Dummy data for Wallet component

    const walletData = {
        balance: 12345.67,
        coins: [
            {
                image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
                name: "Bitcoin",
                symbol: "BTC",
                amount: 0.056,
            },
            {
                image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
                name: "Ethereum",
                symbol: "ETH",
                amount: 1.23,
            },
            {
                image: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
                name: "Cardano",
                symbol: "ADA",
                amount: 500,
            },
            {
                image: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
                name: "Solana",
                symbol: "SOL",
                amount: 10.5,
            },
            {
                image: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
                name: "Dogecoin",
                symbol: "DOGE",
                amount: 2000,
            },
        ],
    };
    const { balance, coins } = walletData;
    return (
        <div className="min-h-screen bg-[#fff] text-white py-10 px-5">
            <div className="max-w-md mx-auto bg-[#111827] shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">Wallet</h1>
                <div className="bg-blue-900 p-4 rounded-lg mb-6">
                    <p className="text-lg">Total Balance</p>
                    <h2 className="text-2xl font-semibold">${balance.toFixed(2)}</h2>
                </div>
                <h2 className="text-xl font-semibold mb-4">Your Coins</h2>
                <ul className="divide-y divide-blue-700">
                    {coins.map((coin, index) => (
                        <li
                            key={index}
                            className="py-3 flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <img
                                    src={coin.image}
                                    alt={coin.name}
                                    className="w-10 h-10 rounded-full mr-4"
                                />
                                <span className="font-medium">{coin.name}</span>
                            </div>
                            <div>
                                <span className="text-teal-300">{coin.amount} {coin.symbol}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Wallet;

// Usage example:
// const balance = 10456.78;
// const coins = [
//   { image: "https://example.com/bitcoin.png", name: "Bitcoin", symbol: "BTC", amount: 0.23 },
//   { image: "https://example.com/ethereum.png", name: "Ethereum", symbol: "ETH", amount: 1.12 },
//   { image: "https://example.com/dogecoin.png", name: "Dogecoin", symbol: "DOGE", amount: 1000 },
// ];
// <Wallet balance={balance} coins={coins} />
