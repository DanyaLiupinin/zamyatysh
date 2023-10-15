import './Shop.scss';

import React, { useEffect } from 'react';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import Filters from '../Filters/Filters';
import Footer from '../Footer/Footer';
import BasketNotification from '../BasketNotification/BasketNotification';
import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';

const Shop: React.FC = () => {

    const { getAllItemsThunk } = useActionCreators(itemsActions);

    useEffect(() => {
        getAllItemsThunk();
    }, []);

    return (
        <>
            <Header />
            <main className='mainShop'>
                <Filters />
                <ItemList />
                <BasketNotification />
            </main>
            <Footer />
        </>
    );
};

export default Shop;