import { useActionCreators, usersActions } from '@store';
import { validateEmail } from '@handlers';

export const useAuthFunctions = () => {
    const { setLoggedIn, setRedirectPath } = useActionCreators(usersActions);

    const handleSuccessfulSubmission = () => {
        localStorage.setItem('loggedIn', 'true');
        setLoggedIn(true);
        setRedirectPath('/shop');
    };

    const resetError = (setData: any) => {
        setData({
            email: '',
            password: '',
            checkbox: false,
        });
    };

    return {
        handleSuccessfulSubmission,
        resetError,
    };
};
