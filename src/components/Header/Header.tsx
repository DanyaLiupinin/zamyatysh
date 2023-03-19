import './Header.scss'

import React from 'react';
import { Link } from 'react-router-dom'

import Burger from '../Burger/Burger';

const logo = require('../../images/zamyatysh.png')

const Header: React.FC<any> = () => {

    const [burgerOpened, setBurgerOpened] = React.useState(false)

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__logo-link' title='Главная'>
                    <img className='header__logo-image' alt='логотип' src={logo}></img>
                </Link>
                <Burger 
                    burgerOpened={burgerOpened}
                    setBurgerOpened={setBurgerOpened}
                />
                <nav className='header__navigation-container'>
                    <ul className={`header__navigation ${burgerOpened ? 'header__navigation_active' : ''}`}>
                        <li className='header__navigation-item'>
                            <Link to='/' className='header__navigation-link'>Главная</Link>
                        </li>
                        <li className='header__navigation-item'>
                            <Link to='/' className='header__navigation-link'>О нас</Link>
                        </li>
                        <li className='header__navigation-item'>
                            <Link to='/' className='header__navigation-link'>Корзина</Link>
                        </li>
                        <li className='header__navigation-item'>
                            <Link to='/' className='header__navigation-link'>Личный кабинет</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header