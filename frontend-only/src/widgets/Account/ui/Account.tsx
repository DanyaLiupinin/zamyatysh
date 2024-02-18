import { useState } from "react";
import { Userdata, Orders } from "@widgets";

import { useGetData } from '../lib/useGetData';
import { IUserData } from "../model/types/types";
import './Account.scss';

export const Account = () => {

    const [userData, setUserData] = useState<IUserData>({
        username: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        street: '',
        floor: '',
        apartment: '    '
    });

    const onChangeData = (fieldName: any, fieldValue: String) => {
        const updatedUserdata = {
            ...userData,
            [fieldName]: fieldValue
        };
        setUserData(updatedUserdata);
    };

    useGetData(setUserData);

    return (
        <>
            <section className='account'>
                <Userdata
                    changeDataHandler={onChangeData}
                    data={userData} />
                <Orders />
            </section>
        </>
    );
};