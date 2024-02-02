import { FC } from "react"

import './AuthError.scss';

interface AuthErrorProps {
    error: string,
}

export const AuthError: FC<AuthErrorProps> = ({
    error
}) => {
    return (
        <p className='authError'>{error}</p>
    )
}