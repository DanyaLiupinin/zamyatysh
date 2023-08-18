import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'   

import './Header.scss'

import Burger from '../Burger/Burger';

import logo from '../../images/logo.svg'

import { TLocale } from '../../types/components';

import content from './locale.json'

const Header: React.FC<any> = () => {

    const [burgerOpened, setBurgerOpened] = useState<Boolean>(false)
    
    const locale: TLocale = useSelector((state: any) => state.items.locale)

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to='/' className='header__logo-link' title='Главная'>
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
                            <Link to='/'>{(content as any).basket[locale]}</Link>
                        </li>
                        <li>
                            <Link to='/'>{(content as any).account[locale]}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header