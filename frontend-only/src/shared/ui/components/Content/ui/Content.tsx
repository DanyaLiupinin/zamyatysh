import { ReactNode } from "react";

import './Content.scss';

interface IContentProps {
    children: ReactNode;
    className?: string
}

export const Content: React.FC<IContentProps> = ({children, className = ''}) => {
    return (
        <section className={`content ${className}`} >
            {children}
        </section>
    );
};