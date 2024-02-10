import React from "react";
import { Header, Footer } from "@widgets";
import { NavButton } from "@features";
import { Item } from "@widgets";

import "./styles/Item/Item.scss";

const ItemCard: React.FC<any> = () => {

    return (
        <>
            <Header />
            <section className='itemCard'>
                <NavButton />
                <Item />
            </section>
            <Footer />
        </>
    );
};

export default ItemCard;
