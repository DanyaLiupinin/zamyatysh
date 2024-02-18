import { useSelector } from 'react-redux';
import { Header } from '@widgets';
import image from '@images/aboutUs.png';
import content from '@locale/About.json';
import { TLanguage } from '@types';

import { selectLocale } from '../model/selectors';
import './About.scss';

export const About: React.FC = () => {
    
    const locale: TLanguage = useSelector(selectLocale);
    return (
        <>
            <div className='about'>
                <Header />
                <div><p>{content.about[locale]}</p></div>
                <div className='about__image-container'>
                    <img className='about__image' src={image} alt='frogs'></img>
                </div>
            </div>
        </>
    );
};