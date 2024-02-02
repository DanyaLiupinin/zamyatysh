import { FormEvent } from "react"

import './AuthInput.scss';
import { AuthError } from "../AuthError";

interface AuthInputProps {
    className?: string,
    inputTitle?: string
    name: string,
    minLength: number,
    maxLength: number,
    value: string,
    placeholder: string,
    error?: string,
    handleInputChange: (e: FormEvent) => void
}

export const AuthInput: React.FC<AuthInputProps> = ({
    inputTitle,
    name,
    minLength,
    maxLength,
    value,
    handleInputChange,
    placeholder,
    className = '',
    error = ''
}) => {
    return (
        <div className="authInput-container" >

            <p>{inputTitle}</p>
            <input
                className={`authInput ${className}`}
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
            ></input>

            <AuthError error={error}></AuthError>

        </div>
    )
}