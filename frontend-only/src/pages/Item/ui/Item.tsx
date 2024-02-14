import React from "react";
import { Header, Footer, Item } from "@widgets";
import { NavButton } from "@features";
import { Container } from "@components";

import "./Item.scss";

export const ItemCard: React.FC<any> = () => {
    return (
        <>
            <Header />
            <Container>
                <section className='itemCard'>
                    <NavButton />
                    <Item />
                </section>
            </Container>
            <Footer />
        </>
    );
};