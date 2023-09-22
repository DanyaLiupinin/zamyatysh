import './Basket.scss';

import Header from '../Header/Header';
import { useSelector } from 'react-redux';

const Basket = () => {

    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const basket = useSelector((state: any) => state.items.basket);

    return (
        <>
            <Header />
            <section className='basket'>
                {
                    !basket ?
                        <p className='basket__empty'>Your basket is empty :c</p>
                        :
                        <div></div>
                }
                {
                    loggedIn ?
                        <div>

                        </div> :
                        <div>
                        </div>
                }
            </section>
        </>
    )
}

export default Basket;