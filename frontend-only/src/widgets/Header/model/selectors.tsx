import { IRootState } from "@types";

export const selectLoggedIn = (state: IRootState) => state.user.loggedIn;
export const selectLanguage = (state: IRootState) => state.items.locale;