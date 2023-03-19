import { Dispatch, SetStateAction } from 'react'

import './Burger.scss'

const burger = require('../../images/burger.png')

const Burger: React.FC<any> = ({ burgerOpened, setBurgerOpened }:
    {
        burgerOpened: Boolean,
        setBurgerOpened: Dispatch<SetStateAction<boolean>>;
    }
) => {
    return (
        <button type='button' onClick={() => setBurgerOpened(!burgerOpened)}>
            <img alt='бургер меню' src={burger}></img>
        </button>
    )
}

export default Burger