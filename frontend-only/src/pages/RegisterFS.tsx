import { AuthForm, AuthInput, AuthSubmit, AuthCheckbox, AuthCaption, AuthError } from "@components";
import { Header } from "@widgets";
import { FormEvent } from "react";

import './test.scss'

export const RegisterFS = () => {
    const handleSubmit = () => { };

    const onIputChange = (e: FormEvent) => { };
    return (
        <>
            <Header />
            <AuthForm formTitle='Registration' handleSubmit={handleSubmit}>

                <div className='ml-auto mr-auto w-full flex flex-col gap-5 items-center'>
                    <AuthInput
                        value=''
                        handleInputChange={onIputChange}
                        name='email'
                        minLength={3}
                        maxLength={20}
                        placeholder={"email"}
                        error=''
                    />

                    <AuthInput
                        value=''
                        handleInputChange={onIputChange}
                        name='password'
                        minLength={3}
                        maxLength={20}
                        placeholder={"password"}
                        error='error'
                    />
                </div>

                <AuthCheckbox className='mt-6'>I confirm that i am cute little frog</AuthCheckbox>

                <AuthSubmit className='mt-10'>Register</AuthSubmit>

                <AuthCaption 
                className='mt-5'
                text='are you already registered?' 
                linkText='login' 
                link='/login' />
                
            </AuthForm>
        </>
    );
};
