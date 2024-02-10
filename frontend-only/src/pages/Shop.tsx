import React from 'react';
import { Container } from '@components';
import { ShopList, Filters, Header, Footer } from '@widgets';

import './styles/Shop/Shop.scss';

const Shop: React.FC = () => {
    return (
        <Container>
            <Header />
            <main className='mainShop'>
                <Filters />
                <ShopList />
            </main>
            <Footer />
        </Container>
    );
};

export default Shop;