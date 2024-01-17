import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './WelcomeNavigation.scss';

interface IWelcomeNavigationProps {
    children: ReactNode,
    sendTo: string,
    className?: string,
}

export const WelcomeNavigation = ({children, sendTo, className}: IWelcomeNavigationProps) => {
    return (
        <Link to={sendTo} className={`${className} welcomeNavigation`}>{children}</Link>
    );
};