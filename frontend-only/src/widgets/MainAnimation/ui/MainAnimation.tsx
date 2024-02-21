import './MainAnimation.scss';

const animation = require('@images/main-animation.GIF');

export const MainAnimation: React.FC = () => {
    return (
        <div className='mainAnimation'>
            <img src={animation} alt='cute frog animation' />
        </div>
    );
};