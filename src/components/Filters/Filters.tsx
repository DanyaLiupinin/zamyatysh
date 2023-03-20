import './Filters.scss'

const Filters: React.FC<any> = () => {
    return (
        <div className='filters'>
            <div className='filters__buttons'>
                <button className='filters__button' type='button'>все</button>
                <button className='filters__button' type='button'>футболки</button>
                <button className='filters__button' type='button'>худи</button>
                <button className='filters__button' type='button'>лонгсливы</button>
                <button className='filters__button' type='button'>аксессуары</button>
                <button className='filters__button' type='button'>стикеры</button>
                <button className='filters__button' type='button'>прочий кал</button>
            </div>
        </div>
    )
}

export default Filters