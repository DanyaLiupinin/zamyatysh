import { Link } from 'react-router-dom';

import './SuccessOrder.scss';


import krestik from '../../../../../../images/krestik.png';

export const SuccessOrder = ({
    onClose
}: any) => {
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

            </div>
        </div>
    )
}