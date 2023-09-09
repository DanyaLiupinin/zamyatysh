import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


import Header from "../Header/Header";
import { useActionCreators } from '../../store';
import { usersActions } from "../../store/user";

import { TLocale } from '../../types/components';
import content from './locale.json';



import './Auth.scss';

const Register = () => {

    const { userRegisterThunk, clearError } = useActionCreators(usersActions);
    
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const error = useSelector((state: any) => state.user.error);
    
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

    const handleSubmit = (e: any) => {
        e.preventDefault();
        userRegisterThunk(userData);
    };

    useEffect(() => {
        if (loggedIn) {
            navigate("/shop");
        }
    }, [loggedIn]);

    useEffect(() => {
        clearError();
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