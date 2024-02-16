import { Header } from '@widgets';
import image from '@images/aboutUs.png';
import './About.scss';

export const About: React.FC = () => {
    return (
        <>
            <div className='about'>
                <Header />
                <div className='about__image-container'>
                    <img className='about__image' src={image} alt='frogs'></img>
                </div>
            </div>
        </>
    );
};