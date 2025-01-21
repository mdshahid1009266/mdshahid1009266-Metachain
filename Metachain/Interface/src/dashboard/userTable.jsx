import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllUser, deleteUser } from '../api'

const UserTable = () => {
    // Sample user data
    const initialUsers = [
        { id: 1, name: "Sufyan", email: "sufyan@example.com", wallet: "0.5 BTC", date: "6/4/2000" },
        { id: 2, name: "Stevens", email: "stevens@example.com", wallet: "2 ETH", date: "6/10/2020" },
        { id: 3, name: "Nora", email: "nora@example.com", wallet: "1.2 LTC", date: "6/10/2020" },
    ];

    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null); // Track which user is being edited
    const [editedData, setEditedData] = useState({}); // Store edited data

    // Handle edit button click
    const handleEdit = (user) => {
        setEditingUserId(user.id);
        setEditedData({ ...user }); // Initialize editedData with the current user's data
    };

    // Handle save button click
    const handleSave = (id) => {
        const updatedUsers = users.map((user) =>
            user.id === id ? { ...user, ...editedData } : user
        );
        setUsers(updatedUsers);
        setEditingUserId(null); // Exit edit mode
    };

    // Handle cancel button click
    const handleCancel = () => {
        setEditingUserId(null); // Exit edit mode without saving
    };

    // Handle input changes in edit mode
    const handleInputChange = (e, field) => {
        setEditedData({ ...editedData, [field]: e.target.value });
    };


    const handleDelete = (id) => {
        const nid = id;
        const getdata = async () => {
            try {
                await deleteUser(nid);
                const response = await getAllUser();
                setUsers(response)
            } catch (error) {

            }
            // setUsers(response)

        }
        getdata();
    };


    useEffect(() => {
        const getdata = async () => {
            const response = await getAllUser();
            setUsers(response)
        }
        getdata();
    }, []);

    return (
        <section className="container mx-auto p-6 font-mono">
            <div>
                <h1 className='text-4xl font-bold text-center text-white mb-8'>User Dashboard</h1>
                <div className='flex justify-end gap-4'>
                    <Link to="/admin/dashboard/createuser" className='text-2xl font-bold text-center bg-white text-black px-3 py-2 rounded-lg mb-8'>Create</Link>
                    <Link to="/admin/dashboard/transactions" className='text-2xl font-bold text-center bg-white text-black px-3 py-2 rounded-lg mb-8'>Transactions</Link>
                </div>
            </div>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Wallet</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {users.map((user) => (
                                <tr key={user.id} className="text-gray-700">
                                    {/* Name */}
                                    <td className="px-4 py-3 border">
                                        {editingUserId === user.id ? (
                                            <input
                                                type="text"
                                                value={editedData.name}
                                                onChange={(e) => handleInputChange(e, 'name')}
                                                className="w-full px-2 py-1 border rounded"
                                            />
                                        ) : (
                                            user.name
                                        )}
                                    </td>

                                    {/* Email */}
                                    <td className="px-4 py-3 border">
                                        {editingUserId === user.id ? (
                                            <input
                                                type="email"
                                                value={editedData.email}
                                                onChange={(e) => handleInputChange(e, 'email')}
                                                className="w-full px-2 py-1 border rounded"
                                            />
                                        ) : (
                                            user.email
                                        )}
                                    </td>

                                    {/* Wallet */}
                                    <td className="px-4 py-3 border">
                                        {editingUserId === user.id ? (
                                            <input
                                                type="text"
                                                value={editedData.wallet}
                                                onChange={(e) => handleInputChange(e, 'wallet')}
                                                className="w-full px-2 py-1 border rounded"
                                            />
                                        ) : (
                                            user.wallet || "0"
                                        )}
                                    </td>

                                    {/* Date */}
                                    <td className="px-4 py-3 border">
                                        {editingUserId === user.id ? (
                                            <input
                                                type="text"
                                                value={editedData.date}
                                                onChange={(e) => handleInputChange(e, 'date')}
                                                className="w-full px-2 py-1 border rounded"
                                            />
                                        ) : (
                                            user.date
                                        )}
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3 border">
                                        {editingUserId === user.id ? (
                                            <>
                                                <button
                                                    onClick={() => handleSave(user.id)}
                                                    className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    onClick={handleCancel}
                                                    className="ml-2 px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => handleEdit(user)}
                                                    className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(user._id)}
                                                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UserTable;