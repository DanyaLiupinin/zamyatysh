import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';   
import { Burger } from '@components';
import { TLanguage } from '@types';
import { selectLoggedIn, selectLanguage } from '../model/selectors';
import content from '@locale/Header.json';
import logo from '@images/logo.svg';
import './Header.scss';

export const Header: React.FC = () => {

    const [burgerOpened, setBurgerOpened] = useState(false);
    const loggedIn = useSelector(selectLoggedIn);
    const locale: TLanguage = useSelector(selectLanguage);

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__logo-link'>
                    <img alt={(content as any).logoAlt[locale]} src={logo}></img>
                </Link>
                <Burger
                    burgerOpened={burgerOpened}
                    setBurgerOpened={setBurgerOpened}
                />
                <nav>
                    <ul className={`header__navigation ${burgerOpened ? 'header__navigation_active' : ''}`}>
                        <li>
                            <Link to='/shop'>{(content as any).shop[locale]}</Link>
                        </li>
                        <li>
                            <Link to='/about'>{(content as any).about[locale]}</Link>
                        </li>
                        <li>
                            <Link to='/basket'>{(content as any).basket[locale]}</Link>
                        </li>
                        <li>
                            <Link to={loggedIn ? '/account' : '/register'}>{(content as any).account[locale]}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
