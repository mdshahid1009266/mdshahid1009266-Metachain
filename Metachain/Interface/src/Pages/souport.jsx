import { useState } from "react";
import { setContext } from '../contexts/AuthContext'
import { creaSouport } from "../api";
export default () => {
    const { state } = setContext();

    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const data = {
            messege: message,
            name: state.user.name,
        }
        const res = await creaSouport(data);
        if (res) {
            alert("Your message has been sent successfully.");
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div id="cryptonews" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="supportContainer bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    We're Here to Help!
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    If you face any issues, please let us know. We'll get back to you as soon as possible.
                </p>
                <div className="takeSupportMessage">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your issue here..."
                        className="w-full h-32 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 resize-none transition-all duration-300"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full mt-6  text-white py-3 px-6 rounded-lg font-semibold bg-[#0a011b] transition-all duration-300"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};