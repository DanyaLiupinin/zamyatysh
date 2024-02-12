import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AuthForm, AuthInput, AuthSubmit, AuthCheckbox, AuthCaption } from "@components";
import { Header } from "@widgets";

import { validateEmail } from "@handlers";
import { useActionCreators, usersActions } from "@store";

export const RegisterFS = () => {

    /// перенести форму в widgets

    const {
        setLoggedIn,
        setRedirectPath
    } = useActionCreators(usersActions);

    const [data, setData] = useState({
        email: '',
        password: '',
        checkbox: false
    });

    const [error, setError] = useState({
        email: '',
        password: '',
        checkbox: true
    });

    const handleSuccessfulSubmission = () => {
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
        setRedirectPath('/shop');
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailError = validateEmail(data.email);

        if (!data.checkbox) {
            setError({...error, checkbox: true});
        }

        if (emailError !== '') {
            setError({ ...error, email: emailError });
        }

        if (emailError === '' && data.checkbox) {
            handleSuccessfulSubmission();
        }

    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    };

    useEffect(() => {
        setError({
            email: '',
            password: '',
            checkbox: false
        });
    }, [data]);

    return (
        <>
            <Header />
            <AuthForm formTitle='Registration' handleSubmit={handleSubmit}>

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

                <AuthCheckbox onClick={() => setData({ ...data, checkbox: !data.checkbox })} checked={data.checkbox} error={error.checkbox} className='mt-6'>I confirm that i am cute little frog</AuthCheckbox>

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
