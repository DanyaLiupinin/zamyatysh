import image from '../../images/basket-image.svg';

import './BasketNotification.scss';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BasketNotification = () => {

    const [itemsCount, setItemsCount] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('basketItems')) {
            const basketItems = localStorage.getItem('basketItems');
            let basketItemsArr;
            if (basketItems) basketItemsArr = JSON.parse(basketItems);
            setItemsCount(basketItemsArr.length);
        }
    }, []);

    return (
        <Link className={`basketNotification ${itemsCount > 0 ? 'basketNotification_active' : ''}`} to='/basket'>
            <p>{itemsCount}</p>
            <img className='basketNotification__image' alt='go to basket' src={image}></img>
        </Link>
    );
};

export default BasketNotification;