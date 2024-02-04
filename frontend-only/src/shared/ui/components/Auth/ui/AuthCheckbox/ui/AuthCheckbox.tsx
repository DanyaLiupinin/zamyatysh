import { FC, ReactNode } from "react"

import './AuthCheckbox.scss';

interface AuthCheckboxProps {
    className?: string,
    children: ReactNode,
    error: boolean,
    onClick: any,
    checked: boolean
}

export const AuthCheckbox: FC<AuthCheckboxProps> = ({
    className = '',
    children,
    error,
    onClick,
    checked
}) => {
    return (

        // zalozhit sostoyanie checked
        <label className={`authCheckbox-label ${className} ${error ? 'authCheckbox__error' : ''}`} >
            <input
            onClick={onClick}
            checked={checked}
                type="checkbox"
                className="authCheckbox-input"
            />
            {children}
        </label>    
    )
}