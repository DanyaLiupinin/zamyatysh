import { useSelector } from 'react-redux';       

import Item from '../Item/Item';

import './ItemList.scss';

const ItemList: React.FC<any> = () => {

    const items = useSelector((state: any) => state.items.items);

    return (
        <div className='itemList'>
            <div className='itemList__container'>
                {
                    items && items.map((i: any) => {
                        return (
                            <Item
                                title={i.attributes.title}
                                price={i.attributes.price}
                                image={i.attributes.image.data[0].attributes.url}
                                key={i.id}
                                slug={i.attributes.slug}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ItemList;