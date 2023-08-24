import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


import Header from "../Header/Header";
import { useActionCreators } from '../../store';
import { usersActions } from "../../store/user";


import './Register.scss';

const Register = () => {

    const { userRegisterThunk } = useActionCreators(usersActions);
    
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        userRegisterThunk(userData);
    };

    useEffect(() => {
        if (loggedIn) {
            navigate("/shop");
        }
    }, [loggedIn]);

    return (
        <>
            <Header />
            <div className='register'>
                <form className='register-form' onSubmit={handleSubmit}>
                    <h2>Регистрация</h2>
                    <p>никнейм</p>
                    <input
                        minLength={3}
                        maxLength={20}
                        name='username'
                        value={userData.username}
                        onChange={handleInputChange}
                    ></input>
                    <p>почта</p>
                    <input
                        minLength={6}
                        name='email'
                        value={userData.email}
                        onChange={handleInputChange}
                    ></input>
                    <p>пароль</p>
                    <input
                        minLength={6}
                        name='password'
                        value={userData.password}
                        onChange={handleInputChange}
                    ></input>
                    <button type='submit'>зарегистрироваться</button>
                </form>
                <p>уже зарегистрированы? <Link to={'/login'}>войти</Link></p>
            </div>
        </>
    )
}

export default Register;