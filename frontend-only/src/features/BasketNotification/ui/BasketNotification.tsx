import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from "@images/basket-image.svg";

import { selectBasketItems } from "../model/selectors/selectors";
import "./BasketNotification.scss";

export const BasketNotification = () => {
    const basketItems = useSelector(selectBasketItems);
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