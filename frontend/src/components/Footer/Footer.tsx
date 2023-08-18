import './Footer.scss';

import zamyatysh from '../../images/logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__copyright'>{`(с) замятыш`}</p>
                <div className='footer__info'>
                    <p>доставка и оплата</p>
                    <p>таблица размеров</p>
                    <p>контакты</p>
                    <div className='footer__image'>
                        <img src={zamyatysh} alt='замятыш'></img>
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



