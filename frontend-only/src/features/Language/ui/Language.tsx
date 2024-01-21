
import { setLanguageHandler } from "@handlers";
import { TLanguage } from "@types";

import './Language.scss';

interface ILanguageProps {
    language: TLanguage
}

export const Language: React.FC<ILanguageProps> = ({language}) => {
    return (
        <button className='welcome__language' onClick={() => setLanguageHandler(language)} >
            <p className='welcome__language-text'>{language}</p>
        </button>
    );
};
