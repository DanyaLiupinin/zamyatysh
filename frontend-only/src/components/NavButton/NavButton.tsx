import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { TLocale } from "../../types/components";
import content from '../../locale/NavButton.json';
import array from '../../images/historyArray.svg';

export const NavButton = () => {

    const navigate = useNavigate();

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <button className='itemCard__navigation' onClick={() => navigate(-1)}>
            <img
                className='itemCard__navigation-image'
                src={array}
                alt='back'
            ></img>
            {content.goBack[locale]}
        </button>
    );
};