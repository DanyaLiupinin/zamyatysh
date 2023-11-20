import React, { useEffect } from 'react';
import Header from "../components/Header/Header";
import ItemList from "../components/ItemList/ItemList";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import BasketNotification from "../components/BasketNotification/BasketNotification";
import { useActionCreators } from "../store";
import { itemsActions } from "../store/items";

import './styles/Shop/Shop.scss';

const Shop: React.FC = () => {

    const { getAllItemsThunk } = useActionCreators(itemsActions);

    useEffect(() => {
        getAllItemsThunk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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