import { useActionCreators } from '../../../store';
import { itemsActions } from '../../../store/items/index';
import { changeLanguageHandler } from 'shared/lib/localstorage/languages/changeLanguageHandler';

import './Language.scss';

interface ILanguageProps {
    title: string,
    className?: string
}

const Language = ({ title, className }: ILanguageProps) => {

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

export default Language;