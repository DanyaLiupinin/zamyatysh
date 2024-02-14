import React from 'react';
import { Container } from '@components';
import { ShopList, Filters, Header, Footer } from '@widgets';

import './Shop.scss';

export const Shop: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <main className='mainShop'>
                    <Filters />
                    <ShopList />
                </main>
            </Container>
            <Footer />
        </>
    );
};