import React from 'react';
// import './CryptoCard.css'; // Optional: Add CSS for styling

const CryptoCard = () => {
    const cryptoData = {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        "current_price": 103758,
        "market_cap": 2052518704689,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 2177166350988,
        "total_volume": 104064431156,
        "high_24h": 108135,
        "low_24h": 103353,
        "price_change_24h": -2824.375697337382,
        "price_change_percentage_24h": -2.64993,
        "market_cap_change_24h": -56958497449.107666,
        "market_cap_change_percentage_24h": -2.70012,
        "circulating_supply": 19797703,
        "total_supply": 21000000,
        "max_supply": 21000000,
        "ath": 108135,
        "ath_change_percentage": -4.04954,
        "ath_date": "2024-12-17T15:02:41.429Z",
        "atl": 67.81,
        "atl_change_percentage": 152911.7614,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2024-12-18T07:01:44.699Z"
    }
    return (
        <div className="cpcontainer">

            <div className="crypto-card">
                <div className="crypto-header">
                    <img src={cryptoData.image} alt={cryptoData.name} className="crypto-image" />
                    <div>
                        <h2>{cryptoData.name} ({cryptoData.symbol.toUpperCase()})</h2>
                        <p>Rank: #{cryptoData.market_cap_rank}</p>
                    </div>
                </div>
                <div className="crypto-details">
                    <p><strong>Current Price:</strong> ${cryptoData.current_price.toLocaleString()}</p>
                    <p><strong>Market Cap:</strong> ${cryptoData.market_cap.toLocaleString()}</p>
                    <p><strong>24h High:</strong> ${cryptoData.high_24h.toLocaleString()}</p>
                    <p><strong>24h Low:</strong> ${cryptoData.low_24h.toLocaleString()}</p>
                    <p><strong>Price Change (24h):</strong> {cryptoData.price_change_24h.toLocaleString()} ({cryptoData.price_change_percentage_24h.toFixed(2)}%)</p>
                    <p><strong>All-Time High:</strong> ${cryptoData.ath.toLocaleString()} ({cryptoData.ath_change_percentage.toFixed(2)}% from ATH)</p>
                    <p><strong>Circulating Supply:</strong> {cryptoData.circulating_supply.toLocaleString()} / {cryptoData.total_supply.toLocaleString()}</p>
                </div>
                <div className="crypto-footer">
                    <small>Last updated: {new Date(cryptoData.last_updated).toLocaleString()}</small>
                </div>
            </div>
        </div>
    );
};

export default CryptoCard;
