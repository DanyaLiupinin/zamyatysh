import './Shop.scss';

import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';

const Shop: React.FC = () => {

    const [category, setCategory] = useState<String>('все');

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
            <Footer />
        </>
    );
};

export default Shop;