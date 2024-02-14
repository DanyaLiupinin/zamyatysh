import {
    AuthForm,
    AuthInput,
    AuthSubmit,
    AuthCaption,
} from "@components";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { validateEmail } from "@handlers";
import { useActionCreators, usersActions } from "@store";

export const Login = () => {
    
    const {
        setLoggedIn,
        setRedirectPath
    } = useActionCreators(usersActions);

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailError = validateEmail(data.email);

        if (emailError === '') {
            localStorage.setItem('loggedIn', 'true');
            setLoggedIn(true);
            setRedirectPath('/shop');
            return;
        }

        setError({ ...error, email: emailError });

    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    };

    useEffect(() => {
        setError({
            email: '',
            password: ''
        });
    }, [data]);


    return (
        <AuthForm formTitle='Authorization' handleSubmit={handleSubmit}>

                <div className='ml-auto mr-auto w-full flex flex-col gap-5 items-center'>
                    <AuthInput
                        value={data.email}
                        handleInputChange={onInputChange}
                        name='email'
                        minLength={3}
                        maxLength={50}
                        placeholder={"email"}
                        error={error.email}
                    />

                    <AuthInput
                        value={data.password}
                        handleInputChange={onInputChange}
                        name='password'
                        minLength={3}
                        maxLength={20}
                        placeholder={"password"}
                        error={error.password}
                    />
                </div>

                <AuthSubmit className='mt-10'>Login</AuthSubmit>

                <AuthCaption
                    className='mt-5'
                    text='you dont have an account?'
                    linkText='register'
                    link='/register' />

            </AuthForm>
    )
}