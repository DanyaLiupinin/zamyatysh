export const useGetLanguage = () => {
    const language = localStorage.getItem('locale') || 'en';

    return {
        language
    };
};