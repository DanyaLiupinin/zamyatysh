import { useState } from "react";
import { Logout, UserForm } from "@features";
import { AccountButton } from "@components";
import "./Userdata.scss";

export const Userdata = ({ data, changeDataHandler }: any) => {

    const [isEditData, setEditData] = useState(false);

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
