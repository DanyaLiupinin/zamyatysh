import './ItemList.scss'

import Item from '../Item/Item'

const ItemList: React.FC = () => {
    return (
        <div className='itemList'>
            <div className='itemList__container'>
                
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />

            </div>
        </div>
    )
}

export default ItemList