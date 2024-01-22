import { AuthForm, AuthInput } from "@components"
import { FormEvent } from "react"

export const RegisterFS = () => {

    const handleSubmit = () => {

    }

    const onIputChange = (e: FormEvent) => {

    }
//dobavit checkbox pri registrasii chto ya milaya liaguska 
    return (
        <AuthForm
            formTitle='title'
            handleSubmit={handleSubmit}
        >
            <AuthInput  value='value' handleInputChange={onIputChange} name='username' minLength={3} maxLength={20} placeholder={'placeholder'}/>
        </AuthForm>
    )
}