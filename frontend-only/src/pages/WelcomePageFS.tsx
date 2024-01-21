import React from 'react';
import { LanguageSwitcher, MainMenu } from '@widgets';

export const WelcomePageFS: React.FC = () => {
    return (
        <div>
            <LanguageSwitcher />
            <MainMenu />
        </div>
    );
};
