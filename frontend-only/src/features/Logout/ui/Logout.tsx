import { FC } from 'react';
import { useActionCreators, usersActions } from '@store';
import './Logout.scss';

export const Logout: FC = () => {

    const { setLoggedIn } = useActionCreators(usersActions);

    const onExit = () => {
        setLoggedIn(false);
    };

    return (
        <button onClick={onExit} className='logout'>
            Exit
        </button>
    );
};