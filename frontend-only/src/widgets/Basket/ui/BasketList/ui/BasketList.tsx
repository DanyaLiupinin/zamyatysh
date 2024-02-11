import { useSelector } from "react-redux";
import { BasketItem } from "@features";
import basketImage from "@images/basket-image.svg";
import './BasketList.scss';

export const BasketList = ({deleteItemHandler}: any) => {
    const basketShort = useSelector((state: any) => state.items.basketItemsShort);
    return (
        <div className='basketList'>
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
            <img className='basketList__image' alt='...' src={basketImage}></img>
        </div>
    );
};