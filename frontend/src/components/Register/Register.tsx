import Header from "../Header/Header";

import { Link } from "react-router-dom";

import './Register.scss';

const Register = () => {
    return (
        <>
            <Header />
            <div className='register'>
                <form className='register-form'>
                    <h2>Регистрация</h2>
                    <p>никнейм</p>
                    <input></input>
                    <p>почта</p>
                    <input></input>
                    <p>пароль</p>
                    <input></input>
                </form>
                <p>уже зарегистрированы? <Link to={'/login'}>войти</Link></p>
            </div>
        </>
    )
}

export default Register;