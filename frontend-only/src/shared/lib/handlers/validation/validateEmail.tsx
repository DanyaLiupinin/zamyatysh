import * as EmailValidator from 'email-validator';

export const validateEmail = (email: string) => {
    const isCharacterValid = EmailValidator.validate(email)

    if (!isCharacterValid) {
        return 'email incorrect';
    } else {
        return '';
    }
};