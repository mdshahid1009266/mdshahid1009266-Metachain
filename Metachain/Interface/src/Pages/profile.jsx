import React, { useEffect, useState } from 'react';
import { setContext } from "../contexts/AuthContext"
import { getUser, updateUser } from "../api"
const UserProfile = () => {

    const { state, dispatch } = setContext();
    // State for user details
    const [user, setUser] = useState("");

    // State for editing mode
    const [isEditing, setIsEditing] = useState(false);

    // State for form inputs
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        password: user.password,
    });

    // Dummy transaction history
    const transactions = [
        { id: 1, type: 'Deposit', amount: 1000, date: '2023-10-01', currency: 'USD', crypto: 'BTC', coin: "0.001" },
        { id: 2, type: 'Withdrawal', amount: -500, date: '2023-10-05', currency: 'BDT', crypto: 'ETH', coin: "1.002" },
        { id: 3, type: 'Withdrawal', amount: -200, date: '2023-10-10', currency: 'USD', crypto: 'USDT', coin: "0.04" },
        { id: 4, type: 'Deposit', amount: 1500, date: '2023-10-15', currency: 'EURO', crypto: 'BTC', coin: "1.201" },
    ];



    // Handle input changes
    const [nuser, nsetUser] = useState("");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        formData._id = state.user._id
        const res = await updateUser(formData);
        const response = await getUser(res._id);
        setIsEditing(false);
        setUser(response)
    };

    useEffect(() => {
        const getdata = async () => {
            const response = await getUser(state.user._id);
            setUser(response)
        }
        getdata();
    }, []);
    // console.log(user);

    return (
        <div className="min-h-screen bg-[#111827] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                    User Profile
                </h1>

                {/* User Details Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Details</h2>

                    {!isEditing ? (
                        <div>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Name:</span> {user?.name}
                                </p>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Email:</span> {user?.email}
                                </p>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Password:</span> ********
                                </p>
                                <p className="text-lg text-gray-700">
                                    <span className="font-semibold">Wallet Balance:</span> ${user.walletBalance?.toFixed(2) || 0}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="mt-6 bg-green-600  text-white px-6 py-2 rounded-lg transition-colors duration-300"
                            >
                                Edit Profile
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Transaction History Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Transaction History</h2>
                    <div className="space-y-4">
                        {transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                            >
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{transaction.type}</p>
                                    <p className="text-sm text-gray-500">{transaction.date}</p>
                                </div>
                                <div className='text-right'>
                                    <p className={`text-lg font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}  >
                                        {transaction.amount.toFixed(2)} {transaction.currency}
                                    </p>
                                    <p className="text-sm text-gray-500"> {transaction.coin}  {transaction.crypto}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;