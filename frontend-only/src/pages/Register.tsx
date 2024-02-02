import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import './styles/Auth/Auth.scss';

import Header from "../components/Header/Header";
import { useActionCreators } from "../store";
import { usersActions } from "../store/user";
import { TLocale } from "../types/components";
import content from '../locale/AuthLocale.json';

const Register = () => {

    const [error, setError] = useState('');

    const { setLoggedIn } = useActionCreators(usersActions);
    
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    
    const locale: TLocale = useSelector((state: any) => state.items.locale);

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

    const userdataHandler = () => {
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (userData.email && userData.username && userData.password) {
            userdataHandler();
            setLoggedIn(true);
        } else {
            setError('data incorrect, check it');
        }
    };

    useEffect(() => {
        if (loggedIn) {
            navigate("/shop");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]);

    useEffect(() => {
        setError('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <div className='auth register'>
                <form className='auth-form' onSubmit={handleSubmit}>
                    <h2 className='auth__title' >{content.registertitle[locale]}</h2>
                    <p>{content.username[locale]}</p>
                    <input
                        minLength={3}
                        maxLength={20}
                        name='username'
                        value={userData.username}
                        onChange={handleInputChange}
                    ></input>
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
                    <button type='submit'>{content.registersubmit[locale]}</button>
                </form>
                <p className='auth__error'>{error}</p>
                <p className='auth__caption'>{content.registercaption[locale]} <Link to={'/login'}>{content.registercaptionbutton[locale]}</Link></p>
            </div>
        </>
    );
};

export default Register;