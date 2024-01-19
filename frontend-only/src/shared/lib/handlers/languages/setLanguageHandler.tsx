

export const setLanguageHandler = (language: 'ru' | 'en') => {
    localStorage.setItem('locale', language);
};