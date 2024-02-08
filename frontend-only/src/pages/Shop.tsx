import React from 'react';

import { ShopList } from '@widgets';
import Filters from "../components/Filters/Filters";

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