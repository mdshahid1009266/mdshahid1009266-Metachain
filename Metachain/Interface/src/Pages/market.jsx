import React, { useEffect, useState } from "react";

const CryptoList = () => {

    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const coin = []
        const scoin = {
            image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
            name: "Bitcoin",
            value: 104094.55,
        }
        for (let i = 0; i < 100; i++) {
            coin.push(scoin)
        }
        setCoins(coin)
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10">Crypto Market</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {coins.map((coin, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex gap-2 items-center justify-between p-5 w-full">
                            <img
                                src={coin.image}
                                alt={coin.name}
                                className="w-20 h-20 mb-4 rounded-full border-2 border-teal-400"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold mb-2">{coin.name}</h2>
                                <p className="text-lg text-teal-300">${coin.value.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CryptoList;

// Usage example:
// const coins = [
//   { image: "https://example.com/bitcoin.png", name: "Bitcoin", value: 43875.23 },
//   { image: "https://example.com/ethereum.png", name: "Ethereum", value: 3156.14 },
//   { image: "https://example.com/dogecoin.png", name: "Dogecoin", value: 0.2513 },
// ];
// <CryptoList coins={coins} />
