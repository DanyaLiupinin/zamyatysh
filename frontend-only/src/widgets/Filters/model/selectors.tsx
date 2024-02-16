import { IRootState } from "@types";

export const selectActiveFilters = (state: IRootState) => state.items.activeCategoryFilter;
export const selectLanguage = (state: IRootState) => state.items.locale;