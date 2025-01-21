import { useState } from "react";
import "./login.css";

export default () => {
    const dummyLoginUser = {
        email: "",
        password: "",
    };
    const dummySigninUser = {
        name: "",
        email: "",
        password: "",
    };
    const [login, setLogin] = useState(true);
    const [state, setState] = useState({
        isFeatching: false,
        error: false,
    });
    // const [error, seterror] = useState(true);

    const [type, setTupe] = useState("password");
    const [itype, isetTupe] = useState("ri-eye-off-line login__eye");
    const passhandel = () => {
        type == "text" ? setTupe("password") : setTupe("text");
        itype == "ri-eye-line login__eye"
            ? isetTupe("ri-eye-off-line login__eye")
            : isetTupe("ri-eye-line login__eye");
    };

    const [loginUser, setloginUser] = useState(dummyLoginUser);
    const [signUser, setsignUser] = useState(dummySigninUser);

    const handelLoginChenge = (e) => {
        setloginUser({
            ...loginUser,
            [e.target.name]: e.target.value,
        });
    };
    const handelSigninChenge = (e) => {
        setsignUser({
            ...signUser,
            [e.target.name]: e.target.value,
        });
    };
    // const { state, dispatch } = setContext();
    // const singnup = async (e) => {
    //     e.preventDefault();
    //     console.log(signUser);
    //     await signUp(signUser);
    //     // setLogin(true)
    // }
    const Login = async (e) => {
        console.log(loginUser);

        // console.log( "hi");
        // navigate("/about");
    };

    const handelLogin = () => {
        setLogin(!login);
        seterror(false);
    };

    return (
        <div className="adduser">
            <div className="login">
                <form action="" className="login__form" autoComplete="off">
                    <h1 className="login__title">Login</h1>

                    <div className="login__content">
                        <div className="login__box">
                            <i className="ri-mail-line login__icon"></i>

                            <div className="login__box-input">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handelLoginChenge}
                                    required
                                    className="login__input"
                                    placeholder=" "
                                />
                                <label for="" className="login__label">
                                    Email
                                </label>
                            </div>
                        </div>

                        <div className="login__box">
                            <i className="ri-lock-2-line login__icon"></i>

                            <div className="login__box-input">
                                <input
                                    type={type}
                                    name="password"
                                    onChange={handelLoginChenge}
                                    required
                                    className="login__input passPad"
                                    id="login-pass"
                                    placeholder=" "
                                />
                                <label for="" className="login__label">
                                    Password
                                </label>
                                <i onClick={passhandel} className={itype} id="login-eye"></i>
                            </div>
                        </div>
                    </div>
                    {state.error && (
                        <p className="error">your email and password doesnot match</p>
                    )}
                    <button
                        type="submit"
                        disabled={state.isFeatching}
                        onClick={Login}
                        className="login__button"
                    >
                        Login
                    </button>
                    <p className="login__register">
                        Don't have an account?{" "}
                        <a onClick={handelLogin} href="#">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};
