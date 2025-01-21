import { Link, NavLink } from "react-router-dom"
import { setContext } from "../contexts/AuthContext"
export default () => {
    const logo = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="45"
            height="45"
            viewBox="0 0 64 64"
        >
            <linearGradient
                id="a"
                x1="6.269"
                x2="57.731"
                y1="32"
                y2="32"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#9cffac"></stop>
                <stop offset="1" stopColor="#00b59c"></stop>
            </linearGradient>
            <path
                fill="url(#a)"
                d="M56.16 39.947 53.1 38.18a22 22 0 0 0 .01-12.325l3.068-1.771a3.097 3.097 0 0 0 1.136-4.233l-2.119-3.67a3.103 3.103 0 0 0-4.232-1.134l-3.07 1.772a22 22 0 0 0-10.666-6.175V7.099A3.1 3.1 0 0 0 34.13 4H29.9a3.1 3.1 0 0 0-3.099 3.099v3.533a22.1 22.1 0 0 0-10.674 6.157l-3.075-1.77a3.106 3.106 0 0 0-4.227 1.135l-2.12 3.664a3.114 3.114 0 0 0 1.132 4.235l3.06 1.768a22 22 0 0 0-.009 12.325L7.82 39.917a3.11 3.11 0 0 0-1.136 4.233l2.12 3.67a3.104 3.104 0 0 0 4.232 1.134l3.07-1.772a22 22 0 0 0 10.665 6.175v3.544A3.1 3.1 0 0 0 29.87 60h4.228a3.1 3.1 0 0 0 3.099-3.099v-3.533a22.1 22.1 0 0 0 10.675-6.157l3.074 1.77a3.105 3.105 0 0 0 4.228-1.135l2.119-3.664a3.114 3.114 0 0 0-1.131-4.235zm-.599 3.233-2.119 3.664a1.1 1.1 0 0 1-1.499.402l-3.767-2.167a1 1 0 0 0-1.248.204 20.06 20.06 0 0 1-10.931 6.305 1 1 0 0 0-.801.98V56.9a1.1 1.1 0 0 1-1.099 1.1H29.87a1.1 1.1 0 0 1-1.099-1.099v-4.344a1 1 0 0 0-.8-.98 19.93 19.93 0 0 1-10.919-6.324 1 1 0 0 0-1.25-.205l-3.766 2.174a1.104 1.104 0 0 1-1.5-.403c-3.175-5.636-3.425-4.038 2.047-7.341a1 1 0 0 0 .449-1.183 19.97 19.97 0 0 1 .009-12.618 1 1 0 0 0-.447-1.185L8.838 22.32a1.104 1.104 0 0 1-.402-1.5l2.12-3.664a1.1 1.1 0 0 1 1.498-.402l3.768 2.167a1 1 0 0 0 1.247-.204 20.06 20.06 0 0 1 10.932-6.305 1 1 0 0 0 .8-.98V7.1a1.1 1.1 0 0 1 1.1-1.1h4.228a1.1 1.1 0 0 1 1.098 1.099v4.344a1 1 0 0 0 .801.98 19.93 19.93 0 0 1 10.918 6.324 1.005 1.005 0 0 0 1.251.205l3.766-2.174a1.103 1.103 0 0 1 1.5.403l2.119 3.669a1.1 1.1 0 0 1-.403 1.5l-3.763 2.172a1 1 0 0 0-.45 1.183 19.97 19.97 0 0 1-.008 12.618 1 1 0 0 0 .446 1.185l3.756 2.172a1.104 1.104 0 0 1 .401 1.5M38.135 24.818a1 1 0 0 0 0-2H33V20.75a1 1 0 1 0-2 0v2.068c-7.45-.74-8.443 9.687-1.046 10.182H31v6.182h-5.137a1 1 0 0 0 0 2H31v2.068a1 1 0 0 0 2 0v-2.068c7.364.832 8.46-9.737 1.046-10.182H33v-6.182zM31 31h-1.046a3.09 3.09 0 1 1 0-6.182H31zm3.046 2a3.091 3.091 0 0 1 0 6.182H33V33zM32 16a16.02 16.02 0 0 0-16 16c.879 21.226 31.124 21.22 32 0a16.02 16.02 0 0 0-16-16m0 30a14.016 14.016 0 0 1-14-14c.769-18.573 27.234-18.568 28 0a14.016 14.016 0 0 1-14 14"
                data-original="url(#a)"
            ></path>
        </svg>
    )
    const { state, dispatch } = setContext();
    return (
        <div id="navbar">
            <div className="navbarContainer maxw flex items-center justify-between text-[#f8f9fa] pc">
                <div className="logo text-2xl font-bold">
                    <Link to="/"><h1 className="flexc gap-1"><span>{logo}</span>Metachain</h1></Link>
                </div>
                <div className="navlinks text-lg">
                    <div className="navlinksContainer bg-primary-gradient">
                        <ul className="flex gap-2">
                            <li><NavLink to="/bye-crypto">Bye Crypto</NavLink></li>
                            <li><NavLink to="/crypto-market">Market</NavLink></li>
                            <li><NavLink to="/wallet">Wallet</NavLink></li>
                            <li><NavLink to="/Earn">Earn</NavLink></li>
                            <li><NavLink to="/exchange">Exchange</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/support">Support</NavLink></li>
                            <li><Link to="/Currency">Currency</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navOptions">
                    <div className="navOptionsContainer flex gap-2">
                        <div className="login">
                            {
                                state.islogin ? (
                                    <Link to="/profile">Profile</Link>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )
                            }
                            {/* <Link to="/login">Login</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}