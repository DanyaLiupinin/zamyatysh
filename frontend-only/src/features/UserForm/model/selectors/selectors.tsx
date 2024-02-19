import { TLanguage } from '@types';

export const selectLanguage = (state: any): TLanguage => state.items.locale;
