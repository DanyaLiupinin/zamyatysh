import { Dispatch, SetStateAction } from 'react'
import categories from '../../constants/constants';

import './Filters.scss'

//const dropdown = require('../../images/dropdown.png')

const Filters: React.FC<any> = ({ category, setCategory }: {
    category: String,
    setCategory: Dispatch<SetStateAction<boolean>>;
}) => {


    return (
        <div className='filters'>
            <div className='filters__buttons'>
                <div className='filters__dropdown'>
                    {/* dropdown menu */}
                    <form>
                        <select onChange={(e) => console.log(e.target.value)}>
                            {categories.map((category) => {
                                return (
                                    <option value={category} key={category}>{category}</option>
                                )
                            })}
                        </select>
                    </form>
                </div>
                {/* desktop menu */}
                {
                    categories.map((category) => {
                        return (
                            <button className='filters__button' type='button' key={category}>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filters