import { useState } from "react";
import { useSelector } from "react-redux";
import { Logout, UserForm } from "@features";
import { AccountButton } from "@components";
import content from '@locale/Userdata.json';
import { TLanguage } from "@types";

import { selectLocale } from "../model/selectors";
import "./Userdata.scss";
import { onUpdateData } from "../lib/handlers/handlers";

export const Userdata = ({ data, changeDataHandler }: any) => {

    const [isEditData, setEditData] = useState(false);
    const locale: TLanguage = useSelector(selectLocale);

    return (
        <>
            <UserForm
                data={data}
                isEditData={isEditData}
                changeDataHandler={changeDataHandler}
            >
                <div className='userdata__buttons'>
                    <AccountButton
                        onClick={() => setEditData(true)}
                        isDisabled={isEditData ? true : false}
                    >
                        {content.edit[locale]}
                    </AccountButton>
                    <AccountButton
                        type='submit'
                        isDisabled={isEditData ? false : true}
                        onClick={() => onUpdateData({ data, setEditData })}
                    >
                        {content.save[locale]}
                    </AccountButton>
                </div>
                <Logout />
            </UserForm>
        </>
    );
};
