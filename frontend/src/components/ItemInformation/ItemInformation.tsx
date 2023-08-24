import './ItemInformation.scss';

import frog from '../../images/vkorzini.svg';

const ItemInformation = ({ item, chosenSize, setChosenSize }: any) => {

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
                {/* добавить sizes
                    item.sizes.map((size, index) => {
                        return (
                            <div onClick={() => onSizeClick(size.toUpperCase())} key={index} className={`itemInformation__size ${chosenSize === size.toUpperCase() ? 'itemInformation__size_active' : ''}`}>
                                <p>{size.toUpperCase()}</p>
                            </div>
                        );
                    })
                */}
            </div>

            <p className='itemInformation__size-guide'>Как выбрать размер?</p>

            <div className='itemInformation__basket-container'> 
                <img src={frog} className={`itemInformation__basket-image ${chosenSize !== '' ? 'itemInformation__basket-image_active' : ''}`} alt='frog wants you to buy something'></img>
                <button className='itemInformation__add-button' type='button'>В корзину</button>
            </div>
        </div>
    );
};

export default ItemInformation;