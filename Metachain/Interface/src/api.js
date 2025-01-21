import axios from "axios";

const BASE_URL = "http://localhost:2000";

const GetTopCoins = async () => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
            {
                params: {
                    vs_currency: "usd", // Target currency
                    order: "market_cap_desc",
                    per_page: 5,
                    page: 1,
                    // sparkline: true,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching coins:", error);
    }
}

const createUser = async ({ data }) => {
    // console.log(data);

    try {
        const response = await axios.post(`${BASE_URL}/createUser`, data);
        return true;
    } catch (error) {
        return false;
    }
}
const getAllUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllUser`);
        return response.data
    } catch (error) {
        return false;
    }
}
const getUser = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/getUser/${id}`);
        return response.data
    } catch (error) {
        return false;
    }
}
const updateUser = async (data) => {
    try {
        const response = await axios.put(`${BASE_URL}/updateUser/${data._id}`, data);
        return response.data
    } catch (error) {
        return false;
    }
}
const userLogin = async ({ data }) => {
    console.log(data);

    try {
        const response = await axios.post(`${BASE_URL}/login`, data);
        return response.data;
    } catch (error) {
        return false;
    }
}
const createTransaction = async ({ data }) => {
    console.log(data);

    try {
        const response = await axios.post(`${BASE_URL}/createTransaction`, data);
        return true
    } catch (error) {
        return false;
    }
}
const creaSouport = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/creaSouport`, data);
        return true
    } catch (error) {
        return false;
    }
}
const getAllTransaction = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllTransaction`);
        return response.data
    } catch (error) {
        return false;
    }
}
const deleteUser = async (id) => {
    try {
        const response = await axios.put(`${BASE_URL}/deleteUser/${id}`);
        return response.data
    } catch (error) {
        return false;
    }
}
export { GetTopCoins, createUser, getAllUser, getUser, deleteUser, updateUser, userLogin, createTransaction, creaSouport, getAllTransaction, };