import React from 'react';

import { ShopList, Filters } from '@widgets';

import { Header, Footer } from '@widgets';

import './styles/Shop/Shop.scss';

const Shop: React.FC = () => {

    return (
        <>
            <Header />
            <main className='mainShop'>
                <Filters />
                <ShopList />
            </main>
            <Footer />
        </>
    );
};

export default Shop;