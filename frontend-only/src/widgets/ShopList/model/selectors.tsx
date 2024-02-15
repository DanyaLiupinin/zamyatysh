import { TLanguage } from '@types';

export const selectLocale = (state: any): TLanguage => state.items.locale;
