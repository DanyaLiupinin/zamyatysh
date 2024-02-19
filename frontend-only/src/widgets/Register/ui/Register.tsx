import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AuthForm, AuthInput, AuthSubmit, AuthCheckbox, AuthCaption } from "@components";
import { validateEmail } from "@handlers";
import content from '@locale/AuthLocale.json';
import { useSelector } from "react-redux";
import { IRootState } from "@types";

import { useAuthFunctions } from "../lib/authFunctions";

export const Register = () => {

    const { handleSuccessfulSubmission, resetError } = useAuthFunctions();

    const language = useSelector((state: IRootState) => state.items.locale);

    const [data, setData] = useState({
        email: '',
        password: '',
        checkbox: false
    });

    const [error, setError] = useState({
        email: '',
        password: '',
        checkbox: false
    });

    const validateForm = () => {
        const emailError = validateEmail(data.email);

        if (!data.checkbox) {
            setError({ ...error, checkbox: true });
        }

        if (data.password.length < 3) {
            setError({ ...error, password: 'min password length is 3' });
        } // ne srabativaet pochemu to

        if (emailError !== '') {
            setError({ ...error, email: emailError });
        }

        return emailError === '' && error.password === '' && data.checkbox;
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            handleSuccessfulSubmission();
        }
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    };

    useEffect(() => {
        resetError(setError);
    }, [data]);

    return (
        <AuthForm formTitle={content.registertitle[language]} handleSubmit={handleSubmit}>
            <div className='ml-auto mr-auto w-full flex flex-col gap-5 items-center'>
                <AuthInput
                    value={data.email}
                    handleInputChange={onInputChange}
                    name='email'
                    minLength={3}
                    maxLength={50}
                    placeholder={content.email[language]}
                    error={error.email}
                />

                <AuthInput
                    value={data.password}
                    handleInputChange={onInputChange}
                    name='password'
                    minLength={3}
                    maxLength={20}
                    placeholder={content.password[language]}
                    error={error.password}
                />
            </div>

            <AuthCheckbox onClick={() => setData({ ...data, checkbox: !data.checkbox })} checked={data.checkbox} error={error.checkbox} className='mt-6'>{content.confirmation[language]}</AuthCheckbox>

            <AuthSubmit className='mt-10'>{content.registersubmit[language]}</AuthSubmit>

            <AuthCaption
                className='mt-5'
                text={content.registercaption[language]}
                linkText={content.registercaptionbutton[language]}
                link='/login' />
        </AuthForm>
    );
};