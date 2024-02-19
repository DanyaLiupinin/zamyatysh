import { FC } from "react"
import { Link } from "react-router-dom"

import './AuthCaption.scss'

interface AuthCaptionProps {
    text?: string,
    linkText?: string,
    link: string,
    className?: string
}

export const AuthCaption: FC<AuthCaptionProps> = ({
    text,
    linkText,
    link,
    className = ''
}) => {

    return (
        <p className={`authCaption ${className}`}>
            {text}
            <Link className={`authCaption__link`} to={link}>{linkText}</Link>
        </p>
    );
};