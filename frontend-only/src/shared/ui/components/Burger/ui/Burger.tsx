import { Dispatch, SetStateAction } from 'react';
import burger from '@images/burger.png';
import './Burger.scss';

interface IBurgerProps {
    burgerOpened: Boolean,
    setBurgerOpened: Dispatch<SetStateAction<boolean>>;
}

export const Burger: React.FC<IBurgerProps> = ({ burgerOpened, setBurgerOpened }) => {
    return (
        <div className='burger'>
            <button style={{ position: `${burgerOpened ? 'fixed' : 'absolute'}` }} className='burger__button' type='button' onClick={() => setBurgerOpened(!burgerOpened)}>
                <img className='burger__image' alt='burger menu' src={burger}></img>
            </button>
        </div>
    );
};
