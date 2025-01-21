import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Not_found from "../Pages/Not_found";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Login from "../Pages/login";
import ByeCrypto from "../Pages/byeCrypto";
import SellCrypto from "../Pages/sellCrypyo";
import News from "../Pages/News";
import Singelnews from "../Pages/singelnews";
import Souport from "../Pages/souport";
import Exchange from "../Pages/exchange";
import Market from "../Pages/market";
import Wallet from "../Pages/wallet";
import Currency from "../Pages/currency";
import Profile from "../Pages/profile";   
import UserTable from "../dashboard/userTable";
import CreateUser from "../dashboard/createuser";
import Transactions from "../Pages/transactions"
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/bye-crypto", element: <ByeCrypto /> },
      { path: "/Earn", element: <SellCrypto /> },
      { path: "/News", element: <News /> },
      { path: "/News/:id", element: <Singelnews /> },
      { path: "/support", element: <Souport /> },
      { path: "/exchange", element: <Exchange /> },
      { path: "/crypto-market", element: <Market /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/Currency", element: <Currency /> },
      { path: "/profile", element: <Profile /> },
      { path: "/admin/dashboard", element: <UserTable /> },
      { path: "/admin/dashboard/createuser", element: <CreateUser /> },
      { path: "/admin/dashboard/transactions", element: <Transactions /> },
      { path: "/*", element: <Not_found /> }

    ],
  },
]);
