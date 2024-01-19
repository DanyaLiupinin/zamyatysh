import React from 'react';
import { Language } from '@features';

export const WelcomePageFS: React.FC = () => {
    return (
        <div>
            <Language language='ru' />
            <Language language='en' />
        </div>
    );
};
