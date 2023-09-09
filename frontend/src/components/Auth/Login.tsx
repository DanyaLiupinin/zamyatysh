import { Link } from "react-router-dom";
import Header from "../Header/Header";


import './Auth.scss';

const Login = () => {
    return (
        <>
        <Header />
        <div className='auth'>
        <form className='auth-form'>
        <h2 className='auth__title'>Авторизация</h2>
            <p >почта</p>
            <input></input>
            <p>пароль</p>
            <input></input>
            <button type='submit'>Войти</button>
        </form>
        <p className='auth__caption'>ещё не зарегистрированы? <Link to={'/register'}>зарегистрироваться</Link></p>
        </div>
        </>
    )
}

export default Login;