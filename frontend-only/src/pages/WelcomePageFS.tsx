import React from 'react';
import { Language } from '@features';
import { LanguageSwitcher } from '@widgets';

export const WelcomePageFS: React.FC = () => {
    return (
        <div>
            <LanguageSwitcher />
        </div>
    );
};
