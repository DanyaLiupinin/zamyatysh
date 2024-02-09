import { Link } from "react-router-dom";

import defaultImage from '@images/tshirt.png';

import "./ShopCard.scss";

export const ShopCard = ({
    images,
    price,
    title,
    id
}: {
    price: string;
    images: any;
    title: string;
    id: number
}) => {

    return (
        <Link className='item-link' to={`${id}`}>
            <div className='item'>
                <div className='item__image-container'>
                    <img
                        className='item__image'
                        src={images[0] || defaultImage}
                        alt='футболка'
                    ></img>
                </div>
                <div className='item__information'>
                    <h2 className='item__title'>{title}</h2>
                    <p className='item__price'>{price}</p>
                </div>
            </div>
        </Link>
    );
};

