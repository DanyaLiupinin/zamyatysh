import { FormEvent } from "react"

interface AuthInputProps {
    inputTitle?: string
    name: string,
    minLength: number,
    maxLength: number,
    value: string,
    placeholder: string,
    handleInputChange: (e: FormEvent) => void
}

export const AuthInput: React.FC<AuthInputProps> = ({
    inputTitle, 
    name,
    minLength,
    maxLength, 
    value, 
    handleInputChange,
    placeholder
}) => {
    return (
        <div>

            <p>{inputTitle}</p>
            <input
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
            ></input>

        </div>
    )
}