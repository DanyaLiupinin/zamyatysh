import './styles/Basket/Basket.scss';
import {
    Header,
    Footer
} from '@widgets';
import { NavButton } from '@features';
import { MainBasketSection } from '@widgets';
import { Container } from '@components';


const Basket = () => {
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

export default Basket;
