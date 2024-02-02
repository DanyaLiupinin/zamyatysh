import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";

import { useActionCreators } from "../store";
import { usersActions } from "../store/user";
import Header from "../components/Header/Header";
import { TLocale } from "../types/components";

import content from '../locale/AuthLocale.json';


const Login = () => {

    const { setLoggedIn } = useActionCreators(usersActions);

    const [error, setError] = useState('');

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const [userData, setUserData] = useState({
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

    const userdataHandler = () => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (userData.email && userData.password) {
            userdataHandler();
            setLoggedIn(true);
        } else {
            setError('data incorrect, check it');
        }
    };

    return (
        <>
            <Header />
            <div className='auth'>
                <form className='auth-form' onSubmit={handleSubmit}>
                    <h2 className='auth__title'>{content.logintitle[locale]}</h2>
                    <p>{content.email[locale]}</p>
                    <input
                        minLength={6}
                        name='email'
                        value={userData.email}
                        onChange={handleInputChange}
                    ></input>
                    <p>{content.password[locale]}</p>
                    <input
                        minLength={6}
                        name='password'
                        value={userData.password}
                        onChange={handleInputChange}
                    ></input>
                    <button type='submit'>{content.logginsubmit[locale]}</button>
                </form>
                <p className='auth__error'>{error}</p>
                <p className='auth__caption'>
                    {content.loggincaption[locale]} 
                    <Link className='auth__caption-link' to={'/register'}>{content.loggincaptionbutton[locale]}</Link>
                </p>
            </div>
        </>
    );
};

export default Login;