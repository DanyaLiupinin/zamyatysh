import { AsyncThunk } from "@reduxjs/toolkit";
import { ActionCreator, ActionCreatorsMapObject } from "redux";

export type TStatusSlice = "init" | "loading" | "success" | "error";
export type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

export type BoundActions<Actions extends ActionCreatorsMapObject> = {
    [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
      ? BoundAsyncThunk<Actions[key]>
      : Actions[key];
  };