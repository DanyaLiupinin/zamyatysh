import Header from "../Header/Header";

import { Link } from "react-router-dom";

import './Login.scss';

const Login = () => {
    return (
        <>
        <Header />
        <div className="login">
        <form className="login-form">
        <h2>Авторизация</h2>
            <p>почта</p>
            <input></input>
            <p>пароль</p>
            <input></input>
        </form>
        <p>ещё не зарегистрированы? <Link to={'/register'}>зарегистрироваться</Link></p>
        </div>
        </>
    )
}

export default Login;