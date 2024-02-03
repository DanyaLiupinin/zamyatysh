import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./BasketNotification.scss";

import image from "../../../images/basket-image.svg";

export const BasketNotification = () => {
    
    const basketItems = useSelector((state: any) => state.items.basketItemsShort);

    return (
        <Link
            className={`basketNotification ${basketItems && basketItems.length > 0 ? "basketNotification_active" : ""
                }`}
            to='/basket'
        >
            <p>{basketItems ? basketItems.length : ""}</p>
            <img
                className='basketNotification__image'
                alt='go to basket'
                src={image}
            ></img>
        </Link>
    );
};