import { Dispatch, SetStateAction } from 'react'

import './Filters.scss'

const dropdown = require('../../images/dropdown.png')

const Filters: React.FC<any> = ({ category, setCategory }: {
    category: String,
    setCategory: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className='filters'>
            <div className='filters__buttons'>
                <div className='filters__dropdown'>
                    <button type='button'>{category}</button>
                    <img src={dropdown} alt='выбрать категорию'></img>
                </div>
                <button className='filters__button' type='button'>все</button> {/* вынести категории в стейт, через map добавлять кнопки */}
                <button className='filters__button' type='button'>футболки</button> {/* в выпадающем списке будет отсутствовать выбранная категория, так как она уже выбрана */}
                <button className='filters__button' type='button'>худи</button> {/* подумать, как это лучше организовать */}
                <button className='filters__button' type='button'>лонгсливы</button>
                <button className='filters__button' type='button'>аксессуары</button>
                <button className='filters__button' type='button'>стикеры</button>
                <button className='filters__button' type='button'>прочий кал</button>
            </div>
        </div>
    )
}

export default Filters