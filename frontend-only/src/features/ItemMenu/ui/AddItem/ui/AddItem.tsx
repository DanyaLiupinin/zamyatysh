import { FC } from "react";
import frog from '@images/vkorzini.svg';
import { useSelector } from "react-redux";
import { TLanguage } from "@types";

import content from '../../../../../locale/ItemMenu.json';

import './AddItem.scss';

type AddItemProps = {
    chosenSize: string,
    onAddItem: any,
    isCaptionActive: any
}

export const AddItem: FC<AddItemProps> = ({chosenSize, onAddItem, isCaptionActive}) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <div className='addItem-container'>
            <img
                    src={frog}
                    className={`itemMenu__basket-image ${chosenSize !== '' ? 'itemMenu__basket-image_active' : ''}`}
                    alt='frog wants you to buy something'></img>
                <button
                    onClick={onAddItem}
                    disabled={isCaptionActive ? true : false}
                    className={`itemMenu__add-button`}
                    type='button'>
                    {
                        content.addToBasket[locale]
                    }
                </button>
        </div>
    );
};