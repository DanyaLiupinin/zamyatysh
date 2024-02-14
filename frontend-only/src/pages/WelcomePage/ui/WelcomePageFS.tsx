import React from 'react';
import { Container, Content } from '@components';
import { LanguageSwitcher, MainMenu, MainAnimation } from '@widgets';

import './WelcomePageFS.scss';

export const WelcomePageFS: React.FC = () => {
    return (
        <Container className='relative'>
            <Content>
            <LanguageSwitcher
                className={'text-right'}
            />
            <div className='menuContainer'>
                <MainMenu
                    className={'justify-center'}
                />
                <MainAnimation />
            </div>
            </Content>
        </Container>
    );
};
