import './Header.scss'

import React from 'react';

import { Link } from 'react-router-dom'

const logo = require('../../images/zamyatysh.png')
const burger = require('../../images/burger.png')

const Header: React.FC<any> = () => {

    const [burgerOpened, setBurgerOpened] = React.useState(false)

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__logo-link' title='Главная'>
                    <img className='header__logo-image' alt='логотип' src={logo}></img>
                </Link>
                <button className='header__burger-button' type='button' onClick={() => setBurgerOpened(!burgerOpened)}>
                    <img className='header__burger-image' alt='бургер меню' src={burger}></img>
                </button>
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