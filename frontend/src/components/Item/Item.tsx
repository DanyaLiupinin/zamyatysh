import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants/constants";

import "./Item.scss";

const Item = ({
    slug,
    image,
    price,
    title
}: {
    price: string;
    image: any;
    slug: string;
    title: string;
}) => {

    return (
        <Link className='item-link' to={`${slug}`}>
            <div className='item'>
                <div className='item__image-container'>
                    <img
                        className='item__image'
                        src={`${BASE_URL}${image}`}
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

export default Item;
