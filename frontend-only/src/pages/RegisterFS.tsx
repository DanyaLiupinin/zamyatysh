import { AuthForm, AuthInput, AuthSubmit, AuthCheckbox } from "@components";
import { Header } from "@widgets";
import { FormEvent } from "react";

export const RegisterFS = () => {
    const handleSubmit = () => { };

    const onIputChange = (e: FormEvent) => { };
    //dobavit checkbox pri registrasii chto ya milaya liaguska
    return (
        <>
            <Header />
            <AuthForm formTitle="Registration" handleSubmit={handleSubmit}>
                <AuthInput
                    value=""
                    handleInputChange={onIputChange}
                    name="email"
                    minLength={3}
                    maxLength={20}
                    placeholder={"email"}
                />

                <AuthInput
                    value=""
                    handleInputChange={onIputChange}
                    name="password"
                    minLength={3}
                    maxLength={20}
                    placeholder={"password"}
                />

                <AuthCheckbox />

                <AuthSubmit>Submit</AuthSubmit>

            </AuthForm>
        </>
    );
};
