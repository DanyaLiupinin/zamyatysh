import { FormEvent, ReactNode } from "react"

import './AuthForm.scss'

interface IAuthFormProps {
    className?: String,
    children: ReactNode,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    formTitle: String
}

export const AuthForm: React.FC<IAuthFormProps> = ({className = '', children, handleSubmit, formTitle}) => {
    return (
            <form className={`authForm ${className}`}  onSubmit={handleSubmit}>
                <h2 className='authTitle'>{formTitle}</h2>
                {children}
            </form>
    );
}