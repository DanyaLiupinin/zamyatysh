import './ItemInformation.scss'

const ItemInformation = ({ item, chosenSize, setChosenSize }: {
    item: {
        category: string,
        title: string,
        price: string,
        id: number,
        image: any[],
        description: string,
        material: string,
        style: string, //фасон
        articul: string,
        sizes: string[]
    },
    chosenSize: string,
    setChosenSize: any,
}) => {
    return (
        <div className='itemInformation'>
            <h2 className='itemInformation__title'>{item.category} {item.title}</h2>
            <p className='itemInformation__price'>{item.price}</p>
            <div className='itemInformation__sizes'>
                {
                    item.sizes.map((size, index) => {
                        return (
                            <div key={index} className='itemInformation__size'>
                                <p>{size.toUpperCase()}</p>
                            </div>
                        )
                    })
                }
            </div>

            <p className='itemInformation__size-guide'>Как выбрать размер?</p>

            <button className='itemInformation__add-button' type='button'>В корзину</button>
        </div>
    )
}

export default ItemInformation