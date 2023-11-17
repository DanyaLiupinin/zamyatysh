import React, { useState } from "react";
import "./Order.scss";

import dropdown from "../../../images/dropdown.svg";

const Order = () => {
    const [isOrderOpened, setOrderOpened] = useState(false);

    // DOBAVIT PLASHKU CHTO VSIO OPLACHENO USPESHNO

    return (
        <>
            <div className='order'>
                <div className='order__card'>
                    <p className='order__title'>order #12345</p>
                    <button
                        className='order__details-btn'
                        onClick={() => setOrderOpened(!isOrderOpened)}
                    >
                        <img src={dropdown} alt='open order details' />
                    </button>
                </div>

                {isOrderOpened && (
                    <div className='order-details'>

                        <div className='order-details__info'>
                            <p className='order-details__date'>20.09.2023</p>
                            <p className='order-details__status'>oplacheno</p>
                        </div>
                        <div className='order-details__items'>
                            <div className='order-item'>
                                <p>tshirt nomer 55</p>
                                <p>size: m</p>
                                <p>5000 kwaks</p>
                            </div>
                            <div className='order-item'>
                                <p>tshirt nomer 55</p>
                                <p>size: m</p>
                                <p>5000 kwaks</p>
                            </div>
                            <div className='order-item'>
                                <p>tshirt nomer 55</p>
                                <p>size: m</p>
                                <p>5000 kwaks</p>
                            </div>
                        </div>
                        <p className='order-details__price'>total: 200000 kwaks</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Order;
