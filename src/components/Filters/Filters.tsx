import { Dispatch, SetStateAction, useState } from 'react'
import categories from '../../constants/constants';

import './Filters.scss'

const dropdowns = require('../../images/dropdown.png')

const Filters: React.FC<any> = ({ category, setCategory }: {
    category: String,
    setCategory: Dispatch<SetStateAction<String>>;
}) => {

    const [dropdown, setDropdown] = useState<Boolean>(false)

    const onClickFilter = (slug: String) => {
        setCategory(slug)
        setDropdown(false)
    }

    return (
        <div className='filters'>
            <div className='filters__buttons'>

                {/* desktop menu */}
                {
                    categories.map((c) => {
                        return (
                            <button className='filters__button' onClick={() => onClickFilter(c)} type='button' key={c}>{c}</button>
                        )
                    })
                }
                {/* dropdown menu */}
                <div className='filters__dropdown'>
                    <button className='filters__dropdown-toggle' onClick={() => setDropdown(!dropdown)}>{category}
                        <img className={`filters__dropdown-image ${dropdown ? 'filters__dropdown-image_up' : ''}`} src={dropdowns} alt='dd'></img>
                    </button>
                    <div id='dropdown' className={`filters__dropdown-menu ${dropdown ? 'filters__dropdown-menu_show' : ''}`} >
                        {
                            categories.map((c) => {
                                return (
                                    c !== category ?
                                        <button className='filters__dropdown-filter' onClick={() => onClickFilter(c)} type='button' key={c}>{c}</button> :
                                        ''
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters