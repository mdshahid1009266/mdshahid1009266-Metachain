import { useEffect, useState } from "react"
import { GetTopCoins } from "../api"
import Coin from "./Coin"

export default () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const getTrendingCoins = async () => {
            try {
                const response = await GetTopCoins(); // This is the function that we imported from the api.js file
                setCoins(response);
            } catch (error) {
                console.error(error);
            }
        }
        getTrendingCoins();

    }, [])

    return (
        <div id="trending" className="bg-gray-900 py-6">
            <div className="trendingContainer  text-gray-300 maxw pc">
                {/* <h1 className="text-4xl font-medium primary-gradient text-center">Trending Currenchys</h1> */}
                <div className="trendingTitle flex justify-between items-center gap-2">
                    {
                        coins.length > 0 && coins.map((coin, index) => (
                            <Coin key={index} coin={coin} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}