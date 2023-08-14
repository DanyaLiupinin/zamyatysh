import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';

import './Languages.scss'

const Languages = () => {
    
    const { changeLanguage } = useActionCreators(itemsActions);

    const languages = [
        { languageTitle: 'ru', locale: 'ru' },
        { languageTitle: 'eng', locale: 'en' }
    ]

    return (
        <div className='welcome__languages'>
            {
                languages.map((language) => {
                    return (
                        <button className='welcome__language' onClick={() => changeLanguage(language.locale)} key={language.locale}>
                            <p className='welcome__language-text'>{language.languageTitle}</p>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Languages;