import { Link } from "react-router-dom";

import './WelcomeNavigation.scss';
import { IWelcomeNavigationProps } from "../model/types/types";

export const WelcomeNavigation = ({ children, sendTo, className }: IWelcomeNavigationProps) => {
    return (
        <Link to={sendTo} className={`${className} welcomeNavigation`}>{children}</Link>
    );
};