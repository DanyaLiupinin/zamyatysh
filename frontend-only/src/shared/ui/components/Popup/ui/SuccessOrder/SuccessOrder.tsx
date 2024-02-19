import { Link } from 'react-router-dom';
import krestik from '@images/krestik.png';
import './SuccessOrder.scss';

import content from '@locale/Popups.json';
import { useSelector } from 'react-redux';
import { IRootState } from '@types';

export const SuccessOrder = ({
    onClose
}: any) => {

    const language = useSelector((state: IRootState) => state.items.locale);
    const loggedIn = useSelector((state: IRootState) => state.user.loggedIn);

    return (
        <div className='notification'>
            <div className='notification__popup'>

                <button>
                    <img onClick={onClose}
                        className='notification__close-btn' src={krestik} alt='close' />
                </button>

                <p>
                    {content.orderCompleted[language]}
                </p>
                {
                    loggedIn &&
                    <button className='toAccount'>
                        <Link to={'/account'}>
                            {content.toAccount[language]}
                        </Link>
                    </button>
                }
            </div>
        </div>
    );
};