import { Link } from 'react-router-dom'

import './WelcomePage.scss'

//const logo = require('../../images/animation.gif')

const WelcomePage: React.FC = () => {

    return (
        <section className='welcome'>
            <div className='welcome__container'>
                <div className='welcome__languages'>
                    <button className='welcome__language'>
                        <p className='welcome__language-text'>RU</p> {/* кнопка пробрасывает язык в redux */}
                    </button>
                    <button className='welcome__language welcome__language_active'>
                        <p className='welcome__language-text'>ENG</p>
                    </button>
                </div>
                <div className='welcome__links'>
                    <Link to='/about' className='welcome__link'>о нас</Link>
                    <Link to='/shop' className='welcome__link'>В магазин</Link>
                </div>
                { /* <img className='welcome__gif' alt='лягушка-логотип' src={logo}></img> */}
            </div>
        </section>
    )
}

export default WelcomePage