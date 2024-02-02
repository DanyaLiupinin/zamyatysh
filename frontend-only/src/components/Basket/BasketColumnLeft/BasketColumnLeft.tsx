import { useSelector } from "react-redux";

import './BasketColumnLeft.scss';

import { BasketItem } from "../BasketItem/BasketItem";
import basketImage from "../../../images/basket-image.svg";

export const BasketColumnLeft = ({deleteItemHandler}: any) => {
    
    const basketShort = useSelector((state: any) => state.items.basketItemsShort);

    return (
        <div className='basket__column basket__column-left'>
            {
                basketShort?.length > 0 &&
                basketShort.map((item: any, index: number) => {
                    return (
                        <BasketItem
                            id={index}
                            key={index}
                            shortItem={item}
                            deleteItemHandler={deleteItemHandler}
                        />
                    );
                })}
            <img className='basket__image' alt='...' src={basketImage}></img>
        </div>
    );
};