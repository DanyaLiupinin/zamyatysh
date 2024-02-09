import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';   

import './Header.scss';

import { Burger } from '@components';
import logo from '@images/logo.svg';
import { TLanguage } from '@types';
import content from '../../../locale/Header.json';

export const Header: React.FC<any> = () => {

    const [burgerOpened, setBurgerOpened] = useState(false);

    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    
    const locale: TLanguage = useSelector((state: any) => state.items.locale);

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
