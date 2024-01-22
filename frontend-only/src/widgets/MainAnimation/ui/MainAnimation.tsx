import './MainAnimation.scss';

const animation = require('@images/main-animation.gif');

export const MainAnimation: React.FC = () => {
    return (
        <div className='mainAnimation'>
            <img src={animation} alt='cute frog animation' />
        </div>
    );
};