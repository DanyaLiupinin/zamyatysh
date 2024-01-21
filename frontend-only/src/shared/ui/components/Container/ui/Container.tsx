import { ReactNode } from "react";

import './Container.scss';

interface IContainerProps {
    children: ReactNode;
    className?: string
}

export const Container: React.FC<IContainerProps> = ({children, className = ''}) => {
    return (
        <section className={`container ${className}`} >
            {children}
        </section>
    );
};