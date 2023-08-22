import './Shop.scss';

import React, { useState } from 'react';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';

const Shop: React.FC = () => {

    return (
        <>
            <Header />
            <main className='mainShop'>
                <Filters />
                <ItemList />
            </main>
            <Footer />
        </>
    );
};

export default Shop;