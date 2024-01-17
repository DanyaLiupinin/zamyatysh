import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './WelcomeNavigation.scss';

interface IWelcomeNavigationProps {
    children: ReactNode,
    sendTo: string
}

export const WelcomeNavigation = ({children, sendTo}: IWelcomeNavigationProps) => {
    return (
        <Link to={sendTo} className='welcomeNavigation'>{children}</Link>
    );
};