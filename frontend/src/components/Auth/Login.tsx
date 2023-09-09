import { Link } from "react-router-dom";
import Header from "../Header/Header";

import { useSelector } from 'react-redux';
import { TLocale } from '../../types/components';
import content from './locale.json';


import './Auth.scss';

const Login = () => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <>
        <Header />
        <div className='auth'>
        <form className='auth-form'>
        <h2 className='auth__title'>{content.logintitle[locale]}</h2>
            <p>{content.email[locale]}</p>
            <input></input>
            <p>{content.password[locale]}</p>
            <input></input>
            <button type='submit'>{content.logginsubmit[locale]}</button>
        </form>
        <p className='auth__caption'>{content.loggincaption[locale]} <Link to={'/register'}>{content.loggincaptionbutton[locale]}</Link></p>
        </div>
        </>
    );
};

export default Login;