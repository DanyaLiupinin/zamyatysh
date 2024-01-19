import { Language } from "@features";
import { languages } from "@constants";

export const LanguageSwitcher: React.FC = () => {
    return (
        <div>
            {
                languages &&
                languages.map((lang, key) => (
                    <Language language={lang} key={key} />
                ))
            }
        </div>
    );
};