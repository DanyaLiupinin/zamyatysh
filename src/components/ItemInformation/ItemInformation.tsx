import './ItemInformation.scss'

const ItemInformation = ({ item }: {
    item: {
        category: string,
        title: string,
        price: string,
        id: number,
        image: any[],
        description: string,
        material: string,
        style: string, //фасон
        articul: string
    }
}) => {
    return (
        <div className='itemInformation'>
            <h2 className='itemInformation__title'>{item.category} {item.title}</h2>
            <p className='itemInformation__price'>{item.price}</p>
            <p>сделать якорную ссылку 'о товаре'</p>
            <div className='itemInformation__sizes'>

                <div className='itemInformation__size'>
                    <p>S</p> {/* пусть размеры приходят с api, пробегать через map */}
                </div>

                <div className='itemInformation__size'>
                    <p>M</p>
                </div>

                <div className='itemInformation__size'>
                    <p>L</p>
                </div>

            </div>

            <p className='itemInformation__size-guide'>Как выбрать размер?</p>

            <button className='itemInformation__add-button' type='button'>В корзину</button>
        </div>
    )
}

export default ItemInformation