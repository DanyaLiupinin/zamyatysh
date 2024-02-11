import './styles/Basket/Basket.scss';
import { useSelector } from "react-redux";
import {
    Header,
    Footer
} from '@widgets';
import { TLanguage } from '@types';
import { NavButton } from '@features';
import { MainBasketSection } from '@widgets';
import { Container } from '@components';

import content from '../locale/Basket.json';

const Basket = () => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

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
