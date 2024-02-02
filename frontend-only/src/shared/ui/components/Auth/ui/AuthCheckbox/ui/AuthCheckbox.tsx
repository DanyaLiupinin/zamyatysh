import { FC, ReactNode } from "react"

import './AuthCheckbox.scss';

interface AuthCheckboxProps {
    className?: string,
    children: ReactNode
}

export const AuthCheckbox: FC<AuthCheckboxProps> = ({
    className = '',
    children
}) => {
    return (

        // zalozhit sostoyanie checked
        <label className={`authCheckbox-label ${className}`} >
            <input
                type="checkbox"
                className="authCheckbox-input"
            />
            {children}
        </label>    
    )
}