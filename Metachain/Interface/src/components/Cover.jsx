import { Link, useNavigate } from "react-router-dom"
import { setContext } from "../contexts/AuthContext"
export default () => {

    let navigate = useNavigate();
    const { state, dispatch } = setContext();

    return (
        <div id="cover">
            <div className="coverContainer text-white maxw flex items-center justify-between pc overflow-hidden">
                <div className="coverLeft flex flex-1 flex-col gap-6 items-start">
                    <h1 className="text-5xl font-bold">Discover Metachain <br /> Today</h1>
                    <p className="text-xl">
                        {/* Metachain is a decentralized platform that enables you to trade, earn, and exchange cryptocurrencies.
                        Our platform is designed to provide you with the best experience in the crypto world. */}

                        Join our secure and user-friendly platform to buy, sell, and trade a wide range of digital currencies. Experience seamless navigation and advanced security protocols for confident trading
                    </p>
                    <button className="coverbtn px-5 py-3 mt-8 font-bold rounded-lg" onClick={() => {state.islogin ? navigate("/bye-crypto"):navigate("/login")}}><a class="neon">Get Started</a></button>
                </div>
                <div className="coverRight flex-1 flex justify-end ">
                    <div className="image-container" >

                        <img
                            src="/images/cover2.jpg"
                            className={`image `}
                            alt="Second"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}