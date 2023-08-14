import './Shop.scss'

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import Filters from '../Filters/Filters'
import Footer from '../Footer/Footer';

import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';

import { getItems } from '../../utils/api';

const Shop: React.FC = () => {

    const { getAllCategoriesThunk, getAllItemsThunk } = useActionCreators(itemsActions);

    const [allItems, setAllItems] = useState<any[]>([])
    const [category, setCategory] = useState<String>('все')



    useEffect(() => {
        getAllItemsThunk()
        /*
        .then(res => {
            let items: any[] = [];
            res.forEach((item: any) => {
                console.log(item.attributes.categories.data)
                    //.data.attributes.slug)

                
                const card = {
                    ...item.attributes,
                    id: item.id,
                    //category: item.attributes.category.data.attributes.slug,
                }
                items.push(card)
            })
            setAllItems(items);
        })*/
    }, [])


    return (
        <>
        <button style={{width: '200px', height: '200px'}} onClick={getAllCategoriesThunk}></button>
            <Header />
            <main className='mainShop'>
                <Filters
                    category={category}
                    setCategory={setCategory}
                />
                <ItemList />
            </main>
            <Footer />
        </>
    )
}

export default Shop