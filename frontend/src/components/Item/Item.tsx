import { Link } from "react-router-dom";

import "./Item.scss";

const Item = ({
    image,
    price,
    title,
    id
}: {
    price: string;
    image: any;
    title: string;
    id: number
}) => {

    return (
        <Link className='item-link' to={`${id}`}>
            <div className='item'>
                <div className='item__image-container'>
                    <img
                        className='item__image'
                        src={image}
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
