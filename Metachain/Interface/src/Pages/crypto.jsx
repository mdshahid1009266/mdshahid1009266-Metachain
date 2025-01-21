import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setData(response.data)
            console.log(response.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
            <div>
                {data.map((item) => (
                    <Link to={`/showcrypto`}>
                        <div className="main" key={item.id}>
                            <img style={{ width: "50px" }} src={item.image} alt={item.name} />

                            <h1>{item.name}</h1>
                            <p className="price">${item.current_price.toLocaleString()}</p>
                            {item.price_change_percentage_24h < 0 ? (
                                <p style={{ color: "red" }}>{item.price_change_percentage_24h}%</p>
                            ) : (
                                <p style={{ color: "green" }}>{item.price_change_percentage_24h}%</p>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
            {loading && <Loading />}
        </>
    );
};

const Loading = () => {
    return <h1>Loading...</h1>;
};



//https://react-crypto-api-fetch.netlify.app/