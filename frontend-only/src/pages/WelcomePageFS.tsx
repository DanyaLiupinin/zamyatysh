import React from 'react';
import { LanguageSwitcher, MainMenu, MainAnimation } from '@widgets';

export const WelcomePageFS: React.FC = () => {
    return (
        <div>
            <LanguageSwitcher
                className={'text-end'}
            />
            <MainMenu />
            <MainAnimation />
        </div>
    );
};
