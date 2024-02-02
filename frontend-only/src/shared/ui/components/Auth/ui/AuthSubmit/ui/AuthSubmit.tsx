import { FC, ReactNode } from 'react';

import './AuthSubmit.scss';

interface AuthSubmitProps {
    className?: string,
    children: ReactNode
}

export const AuthSubmit: FC<AuthSubmitProps> = ({
    className = '',
    children
}) => {
    return (
        <button className={`authSubmit ${className}`} type='submit'>{children}</button>
    )
}