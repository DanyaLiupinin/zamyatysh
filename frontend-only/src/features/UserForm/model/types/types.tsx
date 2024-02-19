import { ReactNode } from "react";

export type UserFormType = {
    data: any;
    changeDataHandler: any;
    children: ReactNode;
    isEditData: boolean;
}