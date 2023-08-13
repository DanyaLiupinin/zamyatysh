import { useMemo } from "react";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import {
  ActionCreatorsMapObject,
  bindActionCreators,
  configureStore,
} from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";


import { BoundActions } from "../types/common";
import { itemsState } from "./items/slices";

export interface IStore {
  
}

export const store: ToolkitStore<any> = configureStore({
  reducer: {
    itemsState
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActionCreators = <
  Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject
>(
  actions: Actions
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
