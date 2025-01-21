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

