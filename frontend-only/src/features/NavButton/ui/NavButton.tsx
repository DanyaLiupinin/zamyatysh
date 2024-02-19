import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TLanguage } from "@types";
import content from '@locale/NavButton.json';
import array from '@images/historyArray.svg';

import { selectLanguage } from '../model/selectors/selectors';
import './NavButton.scss';

export const NavButton = () => {
    const navigate = useNavigate();
    const locale: TLanguage = useSelector(selectLanguage);
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