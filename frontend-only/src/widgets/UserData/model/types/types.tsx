import { IUserData } from "@types";

export interface IUserDataProps {
    data: IUserData,
    changeDataHandler: (fieldname: string, fieldValue: string) => void;
}
