
import { useActionCreators, itemsActions } from "@store";

import { ILanguageProps } from "../model/types/types";
import './Language.scss';

export const Language: React.FC<ILanguageProps> = ({ language }) => {
    const { changeLanguage } = useActionCreators(itemsActions);
    return (
        <button className='welcome__language' onClick={() => changeLanguage(language)} >
            <p className='welcome__language-text'>{language}</p>
        </button>
    );
};
