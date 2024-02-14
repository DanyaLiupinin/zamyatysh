import {
    Header,
    Footer
} from '@widgets';
import { NavButton } from '@features';
import { MainBasketSection } from '@widgets';
import { Container, Content } from '@components';


export const Basket = () => {
    return (
        <>
            <Header />
            <Container>
                <Content>
                    <NavButton />
                    <MainBasketSection />
                </Content>
            </Container>
            <Footer />
        </>
    );
};

