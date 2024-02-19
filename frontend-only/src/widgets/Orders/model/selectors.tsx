import { IRootState } from "@types";

export const selectLanguage = (state: IRootState) => state.items.locale;