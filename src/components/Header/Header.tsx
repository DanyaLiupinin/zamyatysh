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
                    <img alt='логотип' src={logo}></img>
                </Link>
                <Burger
                    burgerOpened={burgerOpened}
                    setBurgerOpened={setBurgerOpened}
                />
                <nav>
                    <ul className={`header__navigation ${burgerOpened ? 'header__navigation_active' : ''}`}>
                        <li>
                            <Link to='/'>Главная</Link>
                        </li>
                        <li>
                            <Link to='/'>О нас</Link>
                        </li>
                        <li>
                            <Link to='/'>Корзина</Link>
                        </li>
                        <li>
                            <Link to='/'>Личный кабинет</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header