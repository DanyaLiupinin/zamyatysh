import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useActionCreators, usersActions } from '@store';
import { TLanguage } from '@types';
import content from '@locale/Logout.json';

import { selectLocale } from '../model/selectors';
import './Logout.scss';

export const Logout: FC = () => {

    const { setLoggedIn } = useActionCreators(usersActions);
    const locale: TLanguage = useSelector(selectLocale);

    const onExit = (e: any) => {
        e.preventDefault();
        setLoggedIn(false);
        localStorage.clear();
    };

    return (
        <button onClick={onExit} className='logout'>
            {content.exit[locale]}
        </button>
    );
};