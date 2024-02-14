import './NoLoggedNotification.scss';
import { Link } from 'react-router-dom';
import krestik from '@images/krestik.png';
import { FC } from 'react';

export const NoLoggedNotification: FC<any> = ({
    onClose,
    onSkip
}: any) => {

    return (
        <div className='notification'>
            <div className='notification__popup'>

                    <button>
                        <img onClick={onClose} className='notification__close-btn' src={krestik} alt='close' />
                    </button>

                <p>
                    If you create an account, you can see your orders in personal account
                </p>
                <div className='notification__buttons'>
                    <button onClick={onSkip} >
                        Skip</button>
                    <button>
                        <Link to='/register'>
                            Register
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
