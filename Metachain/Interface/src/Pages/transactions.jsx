import React, { useEffect, useState } from "react";
import { getAllTransaction } from "../api"
const TransactionTable = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const getdata = async () => {
            const response = await getAllTransaction();
            setTransactions(response)
        }
        getdata();
    }, []);
    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">Transaction Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-6 py-3 text-left text-sm font-medium">#</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Crypto</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Currency</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Payment Method</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Transaction ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr
                                key={transaction._id}
                                className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{transaction.crypto}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{transaction.currency}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {transaction.paymentMethod}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">{transaction.amount}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {transaction.transactionID}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {new Date(transaction.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionTable;
