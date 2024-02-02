import {
    AuthForm,
    AuthInput,
    AuthSubmit,
    AuthCheckbox,
    AuthCaption,
    AuthError
} from "@components";
import { Header } from "@widgets";
import { FormEvent } from "react";


export const LoginFS = () => {
    const handleSubmit = () => { };

    const onIputChange = (e: FormEvent) => { };
    return (
        <>
            <Header />
            <AuthForm formTitle="Authorization" handleSubmit={handleSubmit}>

                <div className="ml-auto mr-auto w-full flex flex-col gap-5 items-center">
                    <AuthInput
                        value=""
                        handleInputChange={onIputChange}
                        name="email"
                        minLength={3}
                        maxLength={20}
                        placeholder={"email"}
                        error=""
                    />

                    <AuthInput
                        value=""
                        handleInputChange={onIputChange}
                        name="password"
                        minLength={3}
                        maxLength={20}
                        placeholder={"password"}
                        error="error"
                    />
                </div>

                <AuthSubmit className="mt-10">Login</AuthSubmit>

                <AuthCaption
                    className="mt-5"
                    text="you dont have an account?"
                    linkText="register"
                    link='/register' />

            </AuthForm>
        </>
    );
};
