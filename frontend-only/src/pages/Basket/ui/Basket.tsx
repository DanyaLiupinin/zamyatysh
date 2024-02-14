import './Basket.scss';
import {
    Header,
    Footer
} from '@widgets';
import { NavButton } from '@features';
import { MainBasketSection } from '@widgets';
import { Container } from '@components';


export const Basket = () => {
    return (
        <>
            <Header />
            <Container>
                <NavButton />
                <MainBasketSection />
            </Container>
            <Footer />
        </>
    );
};

