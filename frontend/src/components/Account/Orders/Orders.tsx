import './Orders.scss';

import Order from '../Order/Order';

const Orders = () => {
    return (
        <div className='orders' >
            <h2>My orders</h2>
            <div className='orders__order-cards' >
                {/* 
<p className='orders__empty'>you dont have orders yet</p>
*/}

                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />

            </div>
        </div>
    );
};

export default Orders;