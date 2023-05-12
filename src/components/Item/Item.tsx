import './Item.scss'

import tshirt from '../../images/t.svg'

const Item = () => {
    return (
        <div className='item'>
            <div className='item__image-container'>
                <img className='item__image' src={tshirt} alt='футболка'></img>
            </div>
            <h2 className='item__title'>футболка 'замятыш'</h2>
            <p className='item__price'>1500 кваксов</p>
        </div>
    )
}

export default Item