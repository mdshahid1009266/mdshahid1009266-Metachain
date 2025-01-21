import React from 'react';

// Dummy currency data
const currencyData = [
    { name: 'US Dollar', value: 1.0, symbol: '$' },
    { name: 'Euro', value: 0.85, symbol: '€' },
    { name: 'British Pound', value: 0.73, symbol: '£' },
    { name: 'Japanese Yen', value: 110.5, symbol: '¥' },
    { name: 'Indian Rupee', value: 74.5, symbol: '₹' },
    { name: 'Australian Dollar', value: 1.35, symbol: 'A$' },
];

const CurrencyCard = ({ name, value, symbol }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-4xl font-semibold text-[#0aba9d]">
            {symbol} {value.toFixed(2)}
        </p>
    </div>
);

const CurrencyDisplay = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8" id="cryptonews">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    Currency Exchange Rates
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currencyData.map((currency, index) => (
                        <CurrencyCard
                            key={index}
                            name={currency.name}
                            value={currency.value}
                            symbol={currency.symbol}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrencyDisplay;