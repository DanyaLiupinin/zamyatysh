import './Burger.scss'

const burger = require('../../images/burger.png')


const Burger: React.FC<any> = ({burgerOpened, setBurgerOpened}) => {

    return (
        <div className='burger'>
            <button className='burger__button' type='button' onClick={() => setBurgerOpened(!burgerOpened)}>
            <img className='burger__image' alt='бургер меню' src={burger}></img>
        </button>
        </div>
    )
}

export default Burger