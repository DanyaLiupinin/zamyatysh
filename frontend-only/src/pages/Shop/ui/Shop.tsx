import React from 'react';
import { Container, Content } from '@components';
import { ShopList, Filters, Header, Footer } from '@widgets';
import './Shop.scss';

export const Shop: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Content className='mainShop'>
                    <Filters />
                    <ShopList />
                </Content>
            </Container>
            <Footer />
        </>
    );
};