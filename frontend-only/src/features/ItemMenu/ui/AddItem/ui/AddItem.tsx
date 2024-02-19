import { FC } from "react";
import frog from '@images/vkorzini.svg';
import { useSelector } from "react-redux";
import { TLanguage } from "@types";
import content from '@locale/ItemMenu.json';

import { AddItemProps } from '../../../model/types/types';
import { selectLanguage } from '../../../model/selectors/selectors';
import './AddItem.scss';

export const AddItem: FC<AddItemProps> = ({ chosenSize, onAddItem, isCaptionActive }) => {

    const locale: TLanguage = useSelector(selectLanguage);

    return (
        <div className='addItem'>
            <img
                src={frog}
                className={`addItem__image ${chosenSize !== '' ? 'addItem__image_active' : ''}`}
                alt='frog wants you to buy something'>
            </img>
            <button
                onClick={onAddItem}
                disabled={isCaptionActive ? true : false}
                type='button'>
                {
                    content.addToBasket[locale]
                }
            </button>
        </div>
    );
};