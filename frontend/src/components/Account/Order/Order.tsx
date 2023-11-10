import "./Order.scss";


import dropdown from '../../../images/dropdown.svg';


const Order = () => {
    return (
        <>
            <div className="order">
                <div className="order__card">
                    <p className="order__title">order #12345</p>
                    <button className="order__details-btn">
                        <img src={dropdown} alt="open order details" />
                    </button>
                </div>

                <div className="order-details" >

                </div>
            </div>
        </>
    );
};

export default Order;
