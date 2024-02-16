import {
    AuthForm,
    AuthInput,
    AuthSubmit,
    AuthCaption,
} from "@components";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { validateEmail } from "@handlers";
import { useActionCreators, usersActions } from "@store";
import content from '@locale/AuthLocale.json';
import { IRootState, TLanguage } from "@types";
import { useSelector } from "react-redux";

export const Login = () => {

    const locale:TLanguage = useSelector((state: IRootState) => state.items.locale);
    
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
        <AuthForm formTitle={content.logintitle[locale]} handleSubmit={handleSubmit}>
                <div className='ml-auto mr-auto w-full flex flex-col gap-5 items-center'>
                    <AuthInput
                        value={data.email}
                        handleInputChange={onInputChange}
                        name='email'
                        minLength={3}
                        maxLength={50}
                        placeholder={content.email[locale]}
                        error={error.email}
                    />
                    <AuthInput
                        value={data.password}
                        handleInputChange={onInputChange}
                        name='password'
                        minLength={3}
                        maxLength={20}
                        placeholder={content.password[locale]}
                        error={error.password}
                    />
                </div>
                <AuthSubmit className='mt-10'>{content.loggincaptionbutton[locale]}</AuthSubmit>
                <AuthCaption
                    className='mt-5'
                    text={content.loggincaption[locale]}
                    linkText={content.loggincaptionbutton[locale]}
                    link='/register' />
            </AuthForm>
    )
}