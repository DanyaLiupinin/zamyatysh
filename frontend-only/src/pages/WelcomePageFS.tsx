import React from 'react';
import { Container } from '@components';
import { LanguageSwitcher, MainMenu, MainAnimation } from '@widgets';

export const WelcomePageFS: React.FC = () => {
    return (
        <Container className='relative'>
            <LanguageSwitcher
                className={'text-right '}
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <MainMenu
                    className={'justify-center'}
                />
                <MainAnimation />
            </div>
            
        </Container>
    );
};
