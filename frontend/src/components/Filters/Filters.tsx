import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import categories from '../../constants/constants';
import { getAllCategories } from '../../utils/api';

import './Filters.scss'

const dropdowns = require('../../images/dropdown.png')

const Filters: React.FC<any> = ({ category, setCategory }: {
    category: String,
    setCategory: Dispatch<SetStateAction<String>>;
}) => {

    const [dropdown, setDropdown] = useState<Boolean>(false)
    const [categoriesQuery, setCategoriesQuery] = useState([]);

    const onClickFilter = (slug: String) => {
        console.log(slug)
        setCategory(slug)
        setDropdown(false)
    }

    useEffect(() => {
        getAllCategories()
        .then((res) => {
            console.log(res)
            setCategoriesQuery(res)
        })
    }, [])

    return (
        <div className='filters'>
            <div className='filters__buttons'>

                {/* desktop menu */}
                {
                    categoriesQuery.map((c: any) => {
                        return (
                            <button className='filters__button' onClick={() => onClickFilter(c.attributes.slug)} type='button' key={c.id}>{c.attributes.name}</button>
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