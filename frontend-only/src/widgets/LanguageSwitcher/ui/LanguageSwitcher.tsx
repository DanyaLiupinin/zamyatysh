import { Language } from "@features";
import { languages } from "@constants";

import { LanguageSwitcherProps } from "../model/types";

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({className = ''}) => {
    return (
        <div className={`languageSwitcher ${className}`} >
            {
                languages &&
                languages.map((lang, key) => (
                    <Language language={lang} key={key} />
                ))
            }
        </div>
    );
};