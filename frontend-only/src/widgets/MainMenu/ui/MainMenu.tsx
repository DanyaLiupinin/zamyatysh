import { WelcomeNavigation } from "@features";

import './MainMenu.scss';

interface IMainMenuProps {
    className?: String,
}

export const MainMenu: React.FC<IMainMenuProps> = ({className = ''}) => {
    return (
        <div className={`mainMenu ${className}`}>
            <WelcomeNavigation sendTo='/shop'>shop</WelcomeNavigation>
            <WelcomeNavigation sendTo='/about'>about us</WelcomeNavigation>
        </div>
    );
};