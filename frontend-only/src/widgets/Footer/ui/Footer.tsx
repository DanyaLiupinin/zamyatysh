import { useSelector } from 'react-redux';   

import './Footer.scss';

import zamyatysh from '../../../images/logo.svg';
//import { TLocale } from '../../types/components';

export const Footer = () => {
    
   // const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>{`(c) zamyatysh`}</p>
                <div className='footer__info'>
                    <p>доставка</p>
                    <p>размеры</p>
                    <p>контакты</p>
                    <div className='footer__image'>
                        <img src={zamyatysh} alt={zamyatysh}></img>
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




