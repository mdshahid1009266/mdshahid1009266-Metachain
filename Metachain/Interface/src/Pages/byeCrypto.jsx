import React, { useState } from "react";
import { createTransaction } from "../api";
import { setContext } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";

const App = () => {
    const { state, dispatch } = setContext();

    const [selectedCrypto, setSelectedCrypto] = useState("BTC");
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [selectedPayment, setSelectedPayment] = useState("Bkash");
    const [amount, setAmount] = useState("");
    const [tid, settid] = useState("");

    const navigate = useNavigate();
    const handleBuy = async () => {
        if (!amount || !tid) {
            alert("Please fill in all fields.");
            return;
        }
        if (!state.islogin) {
            navigate("/login")
            return
        }
        const transactionDetails = {
            crypto: selectedCrypto,
            currency: selectedCurrency,
            paymentMethod: selectedPayment,
            amount,
            transactionID: tid,
        };

        const res = await createTransaction({ data: transactionDetails });
        if (!res) {
            alert("Transaction failed. Please try again.");
            return;
        }
        else {
            alert("Your request is being processed. We will notify you soon via email.");
        }
    };

    return (
        <div className="min-h-screen bg-[#111827] flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Buy-Crypto</h1>

                {/* Crypto Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select Crypto</label>
                    <select
                        value={selectedCrypto}
                        onChange={(e) => setSelectedCrypto(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="BTC">Bitcoin (BTC)</option>
                        <option value="ETH">Ethereum (ETH)</option>
                        <option value="USDT">Tether (USDT)</option>
                    </select>
                </div>

                {/* Currency Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select Currency</label>
                    <select
                        value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">Euro</option>
                        <option value="BDT">BDT</option>
                    </select>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Payment Method</label>
                    <select
                        value={selectedPayment}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="Bkash">Bkash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                        <option value="Paypal">Paypal</option>
                    </select>
                </div>

                {/* Amount Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Transaction ID Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Transaction ID</label>
                    <input
                        type="text"
                        value={tid}
                        onChange={(e) => settid(e.target.value)}
                        placeholder="Enter Your Transaction ID"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Buy Button */}
                <button
                    onClick={handleBuy}
                    className="w-full gradientBtn text-white py-2 rounded-md transition duration-300"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default App;
