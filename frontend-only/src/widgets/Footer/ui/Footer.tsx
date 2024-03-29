import { useSelector } from 'react-redux';   
import { TLanguage } from '@types';
import content from "@locale/Footer.json";
import zamyatysh from '@images/logo.svg';

import { selectLanguage } from '../model/selectors';
import './Footer.scss';

export const Footer = () => {
    const locale: TLanguage = useSelector(selectLanguage);
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>{`(c) zamyatysh`}</p>
                <div className='footer__info'>
                    <p>{content.delivery[locale]}</p>
                    <p>{content.sizes[locale]}</p>
                    <p>{content.contacts[locale]}</p>
                    <div className='footer__image'>
                        <img src={zamyatysh} alt={content.copyrightAlt[locale]}></img>
                    </div>
                </div>
                <div className='footer__links'>
                        <p>{`(vk)`}</p>
                        <p>{`(telegram)`}</p>
                        <p>{`(instagram)`}</p>
                    </div>
            </div>
        </footer>
    );
};




