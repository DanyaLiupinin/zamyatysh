import { Link } from 'react-router-dom';

import './SuccessOrder.scss';


import krestik from '@images/krestik.png';
import { useSelector } from 'react-redux';

export const SuccessOrder = ({
    onClose
}: any) => {

    const loggedIn = useSelector((state: any) => state.user.loggedIn);

    return (
        <div className='notification'>
            <div className='notification__popup'>

                <button>
                    <img onClick={onClose}
                        className='notification__close-btn' src={krestik} alt='close' />
                </button>

                <p>
                    Your order has been successfully completed
                </p>

                {
                    loggedIn &&
                    <button className='toAccount'>
                        <Link to={'/account'}>
                            To kwaccount
                        </Link>
                    </button>

                }

            </div>
        </div>
    )
}