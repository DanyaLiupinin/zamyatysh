import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';   

import Languages from '../components/Languages/Languages';
import { TLocale } from '../types/components';
import content from '../locale/WelcomPageLocale.json';

import { WelcomeNavigation } from 'features/WelcomeNavigation';
import './styles/WelcomePage/WelcomePage.scss';

const logo = require('../images/gifka.GIF');

const WelcomePage: React.FC = () => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <>
        <section className='welcome'>
            <div className='welcome__container'>
                <Languages />
                <div className='welcome__links'>
                    <WelcomeNavigation sendTo='/about'>zhopa</WelcomeNavigation>
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
