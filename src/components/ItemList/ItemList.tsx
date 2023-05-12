import './ItemList.scss'

import Item from '../Item/Item'

import tshirt from '../../images/t.svg'

const items = [
    tshirt, tshirt, tshirt, tshirt, tshirt, tshirt, tshirt
]

const ItemList: React.FC = () => {
    return (
        <div className='itemList'>
            <div className='itemList__container'>

                {
                    items.map((i, index) => {
                        return (
                            <Item
                                slug={`item${index+1}`}
                            />
                        )
                    })
                }
                
                

            </div>
        </div>
    )
}

export default ItemList