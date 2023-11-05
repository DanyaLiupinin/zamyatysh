import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";

import { useActionCreators } from '../../store';
import { usersActions } from "../../store/user";
import Header from "../Header/Header";
import { TLocale } from '../../types/components';

import content from './locale.json';

import './Auth.scss';

const Login = () => {

    const { userLoginThunk } = useActionCreators(usersActions);

    const locale: TLocale = useSelector((state: any) => state.items.locale);
    const error = useSelector((state: any) => state.user.error);

    const [userData, setUserData] = useState({
        identifier: '',
        password: ''
    }); 

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));

    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await userLoginThunk(userData);
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
                        name='identifier'
                        value={userData.identifier}
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