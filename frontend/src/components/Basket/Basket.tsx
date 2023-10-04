import './Basket.scss';

import { Link } from "react-router-dom";

import array from '../../images/historyArray.svg';

import { useNavigate } from 'react-router-dom';

import basketImage from '../../images/basket-image.svg';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useSelector } from 'react-redux';

const Basket = () => {

    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const basket = useSelector((state: any) => state.items.basket);


    const navigate = useNavigate();

    return (
        <>
            <Header />
            <section className='basket'>
            <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    go back
                </button>
                <h2 className='basket__title'>Basket</h2>
                <div className='basket__container'>
                    <div className='basket__column basket__column-left'>
                        <div className='basket__items'>
                            <div className='basket__item'>
                                <div /* img */ className='basket__item-image basket__item-info'></div>
                                <p className='basket__item-title basket__item-info'>tshirt</p>
                                <p className='basket__item-size basket__item-info'>Size: <br /> S</p>
                                <p className='basket__item-price basket__item-info'>Price: <br /> 1000 kwaks</p>
                            </div>

                            <div className='basket__item'>
                                <div /* img */ className='basket__item-image basket__item-info'></div>
                                <p className='basket__item-title basket__item-info'>tshirt</p>
                                <p className='basket__item-size basket__item-info'>Size: <br /> S</p>
                                <p className='basket__item-price basket__item-info'>Price: <br /> 1000 kwaks</p>
                            </div>

                            <div className='basket__item'>
                                <div /* img */ className='basket__item-image basket__item-info'></div>
                                <p className='basket__item-title basket__item-info'>tshirt</p>
                                <p className='basket__item-size basket__item-info'>Size: <br /> S</p>
                                <p className='basket__item-price basket__item-info'>Price: <br /> 1000 kwaks</p>
                            </div>

                            <div className='basket__item'>
                                <div /* img */ className='basket__item-image basket__item-info'></div>
                                <p className='basket__item-title basket__item-info'>tshirt</p>
                                <p className='basket__item-size basket__item-info'>Size: <br /> S</p>
                                <p className='basket__item-price basket__item-info'>Price: <br /> 1000 kwaks</p>
                            </div>

                            <div className='basket__item'>
                                <div /* img */ className='basket__item-image basket__item-info'></div>
                                <p className='basket__item-title basket__item-info'>tshirt</p>
                                <p className='basket__item-size basket__item-info'>Size: <br /> S</p>
                                <p className='basket__item-price basket__item-info'>Price: <br /> 1000 kwaks</p>
                            </div>


                        </div>
                        <img className='basket__image' alt='...' src={basketImage}></img>
                    </div>

                    <div className='basket__column basket__column-right'>
                        <div className='basket__notification'>
                            {
                                loggedIn ?
                                    <p className='basket__notification-text'>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p> :
                                    <>
                                        <p className='basket__notification-text'>register for having access to our discounts</p>
                                        <button className='basket__register-button'>register</button>
                                        <p className='basket__caption'>already have an account?  
                                        <Link to={'/login'}> Login</Link>
                                        </p>
                                    </>
                            }
                        </div>
                        <div className='basket__price-container'>
                            <p >price final is bla bla bla bla</p>
                            <button className="basket__submit-button" type='button'>Buy</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Basket;