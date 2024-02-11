import "./Userdata.scss";

import { useState } from "react";
import { useSelector } from "react-redux";

import { TLanguage } from "@types";
import content from '../../../locale/Userdata.json';

import { Logout, UserForm } from "@features";
import { AccountButton } from "@components";

export const Userdata = ({ data, changeDataHandler }: any) => {

    const [isEditData, setEditData] = useState(false);

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    const onUpdateData = () => {
        localStorage.setItem('userData', JSON.stringify(data));
        setEditData(false);
    };

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
                        Edit
                    </AccountButton>
                    <AccountButton
                        type='submit'
                        isDisabled={isEditData ? false : true}
                        onClick={onUpdateData}
                    >
                        Save
                    </AccountButton>
                </div>
                <Logout />
            </UserForm>
        </>
    );
};
