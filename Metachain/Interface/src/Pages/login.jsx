
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createUser, userLogin } from '../api';

// import { signUp, logIn } from './api'
import { setContext } from '../contexts/AuthContext'
import './login.css';


export default () => {
    const { state, dispatch } = setContext();
    const navigate = useNavigate();
    const dummyLoginUser = {
        email: "",
        password: ""
    }
    const dummySigninUser = {
        name: "",
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(true);
    const [error, seterror] = useState(true);

    const [type, setTupe] = useState('password');
    const [itype, isetTupe] = useState('fa-solid fa-eye-slash login__eye');
    const passhandel = () => {
        (type == "text") ? setTupe("password") : setTupe("text");
        (itype == "fa-solid fa-eye-slash login__eye") ? isetTupe("fa-regular fa-eye login__eye") : isetTupe("fa-solid fa-eye-slash login__eye");
    }


    const [loginUser, setloginUser] = useState(dummyLoginUser);
    const [signUser, setsignUser] = useState(dummySigninUser);

    const handelLoginChenge = (e) => {
        setloginUser({
            ...loginUser, [e.target.name]: e.target.value
        });
    }
    const handelSigninChenge = (e) => {
        setsignUser({
            ...signUser, [e.target.name]: e.target.value
        });
    }
    // const { state, dispatch } = setContext();
    const singnup = async (e) => {
        e.preventDefault();
        const res = await createUser({ data: signUser });
        res ? (
            dispatch({
                type: "Loginsuccess", userData: res
            }),
            navigate('/')
        ) : dispatch({
            type: "Loginfail"
        })
    }
    const Login = async (e) => {
        e.preventDefault();
        dispatch({
            type: "Loginstart"
        })
        const res = await userLogin({ data: loginUser });
        res ? (
            dispatch({
                type: "Loginsuccess", userData: res
            }),
            navigate('/')
        ) : dispatch({
            type: "Loginfail"
        })
    }

    const handelLogin = () => {
        setLogin(!login);
        seterror(false)
    }
    return (
        login ? <div className="adduser">
            <div className="login">
                <form action="" className="login__form" autoComplete='off'>
                    <h1 className="login__title">Login</h1>

                    <div className="login__content">
                        <div className="login__box">
                            <i className="fa-regular fa-envelope login__icon"></i>


                            <div className="login__box-input">
                                <input type="email" name='email' onChange={handelLoginChenge} required className="login__input" placeholder=" " />
                                <label for="" className="login__label">Email</label>
                            </div>
                        </div>

                        <div className="login__box">
                            <i className="fa-solid fa-unlock-keyhole login__icon"></i>
                            <div className="login__box-input">
                                <input type={type} name='password' onChange={handelLoginChenge} required className="login__input passPad" id="login-pass" placeholder=" " />
                                <label for="" className="login__label">Password</label>
                                <i onClick={passhandel} className={itype} id="login-eye"></i>
                            </div>
                        </div>
                    </div>
                    {
                        state.error && <p className='error'>your email and password doesnot match</p>
                    }
                    <button type="submit" disabled={state.isFeatching} onClick={Login} className="login__button">Login</button>
                    <p className="login__register">
                        Don't have an account? <a onClick={handelLogin} href="#">Register</a>
                    </p>
                </form>
            </div>
        </div>
            : <div className="adduser">

                <div className="login">
                    <form action="" className="login__form" autoComplete='off'>
                        <h1 className="login__title">Signup</h1>

                        <div className="login__content">

                            <div className="login__box">
                                <i className="fa-regular fa-user login__icon"></i>
                                <div className="login__box-input">
                                    <input type="text" name='name' onChange={handelSigninChenge} required className="login__input" placeholder=" " />
                                    <label for="" className="login__label">Name</label>
                                </div>
                            </div>

                            <div className="login__box">
                                <i className="fa-regular fa-envelope login__icon"></i>


                                <div className="login__box-input">
                                    <input type="email" name='email' onChange={handelSigninChenge} required className="login__input" placeholder=" " />
                                    <label for="" className="login__label">Email</label>
                                </div>
                            </div>

                            <div className="login__box">
                                <i className="fa-solid fa-unlock-keyhole login__icon"></i>
                                <div className="login__box-input">
                                    <input type={type} name='password' onChange={handelSigninChenge} required className="login__input passPad" id="login-pass" placeholder=" " />
                                    <label for="" className="login__label">Password</label>
                                    <i onClick={passhandel} className={itype} id="login-eye"></i>
                                </div>
                            </div>
                        </div>
                        {
                            error && <p className='error'>something wrong! please try again</p>
                        }
                        <button type="submit" onClick={singnup} class="login__button">Register</button>
                        <p className="login__register">
                            Alrady have an account? <a onClick={handelLogin} href="#">Login</a>
                        </p>
                    </form>
                </div>
            </div>

    )
}






