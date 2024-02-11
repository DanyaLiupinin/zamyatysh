import React from "react";
import { Header, Footer, Item } from "@widgets";
import { NavButton } from "@features";

import "./styles/Item/Item.scss";
import { Container } from "@components";

const ItemCard: React.FC<any> = () => {

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

export default ItemCard;
