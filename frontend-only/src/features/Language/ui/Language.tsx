
import { TLanguage } from "@types";
import { useActionCreators, itemsActions } from "@store";

import './Language.scss';

interface ILanguageProps {
    language: TLanguage
}

export const Language: React.FC<ILanguageProps> = ({language}) => {
    const {changeLanguage} = useActionCreators(itemsActions);
    return (
        <button className='welcome__language' onClick={() => changeLanguage(language)} >
            <p className='welcome__language-text'>{language}</p>
        </button>
    );
};
