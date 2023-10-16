import { useSelector } from 'react-redux';   

import './Footer.scss';

import zamyatysh from '../../images/logo.svg';
import { TLocale } from '../../types/components';

import content from './locale.json';

const Footer = () => {
    
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>{content.copyright[locale]}</p>
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

export default Footer;



