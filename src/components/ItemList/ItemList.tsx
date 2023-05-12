import './ItemList.scss'

import Item from '../Item/Item'

const ItemList: React.FC<any> = ({ allItems }: {
    allItems: any[]
}) => {
    return (
        <div className='itemList'>
            <div className='itemList__container'>
                {
                    allItems.map((i) => {
                        return (
                            <Item
                                title={i.title}
                                category={i.category}
                                price={i.price}
                                image={i.image[0]}
                                key={i.id}
                                slug={`item${i.id + 1}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemList