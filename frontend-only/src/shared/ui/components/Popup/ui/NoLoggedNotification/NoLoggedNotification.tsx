import './NoLoggedNotification.scss';
import content from '@locale/Popups.json';
import { Link } from 'react-router-dom';
import krestik from '@images/krestik.png';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '@types';

export const NoLoggedNotification: FC<any> = ({
    onClose,
    onSkip
}: any) => {
    const language = useSelector((state: IRootState) => state.items.locale);
    return (
        <div className='notification'>
            <div className='notification__popup'>

                <button>
                    <img onClick={onClose} className='notification__close-btn' src={krestik} alt='close' />
                </button>

                <p>
                    {content.registerPlease[language]}
                </p>
                <div className='notification__buttons'>
                    <button onClick={onSkip} >
                        {content.skip[language]}</button>
                    <button>
                        <Link to='/register'>
                            {content.register[language]}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
