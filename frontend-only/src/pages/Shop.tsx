import React from 'react';
import Header from "../components/Header/Header";
import ShopList from '../components/ShopList/ShopList';
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";

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