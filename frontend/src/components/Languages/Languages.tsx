import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';

import './Languages.scss';

const Languages = () => {
    
    const { changeLanguage } = useActionCreators(itemsActions);

    const languages = [
        { languageTitle: 'ru', locale: 'ru' },
        { languageTitle: 'eng', locale: 'en' }
    ];

    const onClickLanguage = (locale: string) => {
        changeLanguage(locale);
        localStorage.setItem('locale', locale);
    };

    return (
        <div className='welcome__languages'>
            {
                languages.map((language) => {
                    return (
                        <button className='welcome__language' onClick={() => onClickLanguage(language.locale)} key={language.locale}>
                            <p className='welcome__language-text'>{language.languageTitle}</p>
                        </button>
                    );
                })
            }
        </div>
    );
};

export default Languages;