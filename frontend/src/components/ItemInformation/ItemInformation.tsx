import './ItemInformation.scss';

import { useSelector } from 'react-redux';

import frog from '../../images/vkorzini.svg';
import { TLocale } from '../../types/components';

import content from './locale.json';

const ItemInformation = ({ item, chosenSize, setChosenSize, isBasketItem }: any) => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const onSizeClick = (size: string) => {
        if (chosenSize.includes(size)) {
            setChosenSize('');
        } else {
            setChosenSize(size);
        }
    };

    return (
        <div className='itemInformation'>
            <h2 className='itemInformation__title'>{item.title}</h2>
            <p className='itemInformation__price'>{item.price}</p>
            <div className='itemInformation__sizes'>
                {
                    item.sizes && item.sizes.data && item.sizes.data.map((size: any) => {
                        return (
                            <div onClick={() => onSizeClick(size.attributes.size.toUpperCase())} key={size.id} className={`itemInformation__size ${chosenSize === size.attributes.size.toUpperCase() ? 'itemInformation__size_active' : ''}`}>
                                <p>{size.attributes.size.toUpperCase()}</p>
                            </div>
                        );
                    })
                }
            </div>

            <p className='itemInformation__size-guide'>{content.howToSize[locale]}</p>

            <div className='itemInformation__basket-container'>
                <img src={frog} className={`itemInformation__basket-image ${chosenSize !== '' ? 'itemInformation__basket-image_active' : ''}`} alt='frog wants you to buy something'></img>
                <button disabled={isBasketItem ? true : false} className={`itemInformation__add-button`} type='button'>
                    {
                        isBasketItem ?
                            content.addedToBasket[locale] :
                            content.addToBasket[locale]
                    }
                </button>
                <p>you can only but 1 item at the moment :c</p>
            </div>
        </div>
    );
};

export default ItemInformation;