import { WelcomeNavigation } from "@features";
import content from '@locale/WelcomPage.json';
import './MainMenu.scss';
import { useSelector } from "react-redux";
import { TLanguage } from "@types";
import { IMainMenuProps } from "../model/types/types";
import { selectLanguage } from '../model/selectors/selectors';

export const MainMenu: React.FC<IMainMenuProps> = ({ className = '' }) => {
    const locale: TLanguage = useSelector(selectLanguage);
    return (
        <div className={`mainMenu ${className}`}>
            <WelcomeNavigation sendTo='/shop'>{content.shop[locale]}</WelcomeNavigation>
            <WelcomeNavigation sendTo='/about'>{content.about[locale]}</WelcomeNavigation>
        </div>
    );
};