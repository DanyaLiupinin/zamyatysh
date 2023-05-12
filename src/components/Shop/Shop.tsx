import './Shop.scss'

import React, { useEffect, useState } from 'react';

import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import Filters from '../Filters/Filters'
import Footer from '../Footer/Footer';

import items from '../../constants/items';

const Shop: React.FC = () => {

    const [allItems, setAllItems] = useState<any[]>([])
    const [category, setCategory] = useState<String>('все')

    useEffect(() => {
        setAllItems(items)
    }, [])

    return (
        <>
            <Header />
            <main className='mainShop'>
                <Filters
                    category={category}
                    setCategory={setCategory}
                />
                <ItemList 
                    allItems={allItems}
                />
            </main>
            <Footer />
        </>
    )
}

export default Shop