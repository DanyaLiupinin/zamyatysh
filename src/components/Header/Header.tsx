import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Header.scss'

import Burger from '../Burger/Burger';

const logo = require('../../images/zamyatysh.png')

const Header: React.FC<any> = () => {

    const [burgerOpened, setBurgerOpened] = useState<Boolean>(false)

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__logo-link' title='Главная'>
                    <img alt='логотип' src={logo}></img>
                </Link>
                <Burger
                    burgerOpened={burgerOpened}
                    setBurgerOpened={setBurgerOpened}
                />
                <nav>
                    <ul className={`header__navigation ${burgerOpened ? 'header__navigation_active' : ''}`}>
                        <li>
                            <Link to='/shop'>Магазин</Link>
                        </li>
                        <li>
                            <Link to='/about'>О нас</Link>
                        </li>
                        <li>
                            <Link to='/'>Корзина</Link>
                        </li>
                        <li>
                            <Link to='/'>Личный квабинет</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header