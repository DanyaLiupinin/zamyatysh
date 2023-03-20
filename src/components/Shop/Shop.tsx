import './Shop.scss'

import React, { useState } from 'react';

import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import Filters from '../Filters/Filters'

const Shop: React.FC = () => {

    const [category, setCategory] = useState<String>('все')

    return (
        <>
            <Header />
            <main className='mainShop'>
                <Filters
                    category={category}
                    setCategory={setCategory}
                />
                <ItemList />
            </main>
        </>
    )
}

export default Shop