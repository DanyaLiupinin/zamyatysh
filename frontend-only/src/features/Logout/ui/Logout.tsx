import { FC } from 'react';
import { useActionCreators, usersActions } from '@store';
import './Logout.scss';

export const Logout: FC = () => {

    const { setLoggedIn, setRedirectPath } = useActionCreators(usersActions);

    const onExit = (e: any) => {
        e.preventDefault();
        setLoggedIn(false)
    };

    return (
        <button onClick={onExit} className='logout'>
            Exit
        </button>
    );
};