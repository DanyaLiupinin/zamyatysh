import { ReactNode } from "react"

import './AuthForm.scss'

interface IAuthFormProps {
    className?: String,
    children: ReactNode,
    handleSubmit: () => void,
    formTitle: String
}

export const AuthForm: React.FC<IAuthFormProps> = ({className = '', children, handleSubmit, formTitle}) => {
    return (
            <form className={`auth-form ${className}`}  onSubmit={handleSubmit}>
                <h2 className='auth__title'>{formTitle}</h2>
                {children}
            </form>
    )
}