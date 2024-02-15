import { WelcomeNavigation } from "@features";
import content from '@locale/WelcomPage.json';
import './MainMenu.scss';
import { useSelector } from "react-redux";
import { TLanguage } from "@types";

interface IMainMenuProps {
    className?: String,
}

export const MainMenu: React.FC<IMainMenuProps> = ({className = ''}) => {
    const locale: TLanguage = useSelector((state: any) => state.items.locale);
    return (
        <div className={`mainMenu ${className}`}>
            <WelcomeNavigation sendTo='/shop'>{content.shop[locale]}</WelcomeNavigation>
            <WelcomeNavigation sendTo='/about'>{content.about[locale]}</WelcomeNavigation>
        </div>
    );
};