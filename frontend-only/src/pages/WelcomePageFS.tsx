import React from 'react';
import { Container } from '@components';
import { LanguageSwitcher, MainMenu, MainAnimation } from '@widgets';

import './styles/WelcomePageFS/WelcomePageFS.scss'

export const WelcomePageFS: React.FC = () => {
    return (
        <Container className='relative'>
            <LanguageSwitcher
                className={'text-right'}
            />
            <div className='menuContainer'>
                <MainMenu
                    className={'justify-center'}
                />
                <MainAnimation />
            </div>
        </Container>
    );
};
