import { useSelector } from 'react-redux';       

import Item from '../Item/Item';

import { TLocale } from '../../types/components';
import content from './locale.json';



import './ItemList.scss';

const ItemList: React.FC<any> = () => {

    const items = useSelector((state: any) => state.items.items);
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <div className='itemList'>
            <div className='itemList__container'>
                {
                    items && items.length > 0 ? items.map((i: any) => {
                        return (
                            <Item
                                title={i.attributes.title}
                                price={i.attributes.price}
                                image={i.attributes.image.data[0].attributes.url}
                                key={i.id}
                                slug={i.attributes.slug}
                            />
                        );
                    }) :
                    <p className='itemList__empty'>{content.empty[locale]}</p>
                }
            </div>
        </div>
    );
};

export default ItemList;