import { Dispatch, SetStateAction } from 'react';

import './Burger.scss';

const burger = require('../../images/burger.png');

const Burger: React.FC<any> = ({ burgerOpened, setBurgerOpened }:
    {
        burgerOpened: Boolean,
        setBurgerOpened: Dispatch<SetStateAction<boolean>>;
    }
) => {
    return (
        <div className='burger'>
            <button style={{position: `${burgerOpened ? 'fixed' : 'absolute'}`}} className='burger__button' type='button' onClick={() => setBurgerOpened(!burgerOpened)}>
                <img className='burger__image' alt='бургер меню' src={burger}></img>
            </button>
        </div>
    );
};

export default Burger;