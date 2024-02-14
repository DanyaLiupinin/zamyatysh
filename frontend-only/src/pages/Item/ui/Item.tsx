import React from "react";
import { Header, Footer, Item } from "@widgets";
import { NavButton } from "@features";
import { Container, Content } from "@components";

export const ItemCard: React.FC<any> = () => {
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <NavButton />
                    <Item />
                </Content>
            </Container>
            <Footer />
        </>
    );
};