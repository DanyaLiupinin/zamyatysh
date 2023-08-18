import { Dispatch, SetStateAction, useState } from 'react';
import { useSelector } from 'react-redux';  


import './Filters.scss';

const dropdowns = require('../../images/dropdown.png');

const Filters: React.FC<any> = ({ category, setCategory }: {
    category: String,
    setCategory: Dispatch<SetStateAction<String>>;
}) => {

    const [dropdown, setDropdown] = useState<Boolean>(false);

    const categories = useSelector((state: any) => state.items.categories);

    const onClickFilter = (slug: String) => {
        setCategory(slug);
        setDropdown(false);
    };

    return (
        <div className='filters'>
            <div className='filters__buttons'>

                {/* desktop menu */}
                {
                    categories && categories.map((c: any) => {
                        return (
                            <button className='filters__button' onClick={() => onClickFilter(c.attributes.slug)} type='button' key={c.id}>{c.attributes.name}</button>
                        );
                    })
                }
                {/* dropdown menu */}
                <div className='filters__dropdown'>
                    <button className='filters__dropdown-toggle' onClick={() => setDropdown(!dropdown)}>{category}
                        <img className={`filters__dropdown-image ${dropdown ? 'filters__dropdown-image_up' : ''}`} src={dropdowns} alt='dd'></img>
                    </button>
                    <div id='dropdown' className={`filters__dropdown-menu ${dropdown ? 'filters__dropdown-menu_show' : ''}`} >
                        {
                            categories && categories.map((c: any) => {
                                return (
                                    c.attributes.slug !== category ?
                                        <button className='filters__dropdown-filter' onClick={() => onClickFilter(c.attributes.slug)} type='button' key={c.id}>{c.attributes.name}</button> :
                                        ''
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;