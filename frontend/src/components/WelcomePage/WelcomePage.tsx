import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

import Languages from '../Languages/Languages'

import './WelcomePage.scss'

const logo = require('../../images/gifka.GIF')

const WelcomePage: React.FC = () => {

    const locale = useSelector((state: any) => state.items.locale)

    useEffect(() => {
console.log(locale)
    }, [locale])

    return (
        <>
        <section className='welcome'>
            <div className='welcome__container'>
                <Languages />
                <div className='welcome__links'>
                    <Link to='/about' className='welcome__link'>о нас</Link>
                    <Link to='/shop' className='welcome__link'>в магазин</Link>
                </div>
                <img className='welcome__gif' alt='лягушка-логотип' src={logo}></img>
            </div>
        </section>
        </>
    )
}

export default WelcomePage
