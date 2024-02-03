import './styles/About/About.scss';

import { Header } from '@widgets';

const image = require('../images/aboutUs.png');

const About: React.FC = () => {
    return (
        <>
            <div className='about'>
                <Header />
                <div className='about__image-container'>
                    <img className='about__image' src={image} alt='лягушки держутся за ручки'></img>
                </div>
            </div>
        </>
    );
};

export default About;