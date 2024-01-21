<<<<<<< HEAD
import { useActionCreators } from '../../../store';
import { itemsActions } from '../../../store/items/index';
import { changeLanguageHandler } from 'shared/lib/localstorage/languages/changeLanguageHandler';

import './Language.scss';


interface ILanguageProps {
    title: string,
    className?: string
}

export const Language = ({ title, className }: ILanguageProps) => {

    const { changeLanguage } = useActionCreators(itemsActions);

    const languages = [
        { languageTitle: 'ru', locale: 'ru' },
        { languageTitle: 'eng', locale: 'en' }
    ];

    const onClickLanguage = (locale: string) => {
        changeLanguage(locale);
        changeLanguageHandler(locale);
    };

    return (
        <button className={`${className} welcome__language`} 
        onClick={() => onClickLanguage(title)}
        >
            <p className='welcome__language-text'>{title}</p>
        </button>
    );
};
=======
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
>>>>>>> 3a9b40575fffb8c3ebef623232a2e64081b54388
