import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';   

import Languages from '../Languages/Languages';
import { TLocale } from '../../types/components';

import content from './locale.json';


import './WelcomePage.scss';

const logo = require('../../images/gifka.GIF');



// TODO 
// прибраться в коде
// посмотреть страницу на разных устройствах, увеличить размер гифки
// написать altы на английском

const WelcomePage: React.FC = () => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <>
        <section className='welcome'>
            <div className='welcome__container'>
                <Languages />
                <div className='welcome__links'>
                    <Link to='/about' className='welcome__link'>{content.about[locale]}</Link>
                    <Link to='/shop' className='welcome__link'>{content.shop[locale]}</Link>
                </div>
                <img className='welcome__gif' alt={content.gifAlt[locale]} src={logo}></img>
            </div>
        </section>
        </>
    );
};

export default WelcomePage;