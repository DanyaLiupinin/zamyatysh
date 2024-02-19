import { useState } from "react";
import { Userdata, Orders } from "@widgets";
import { IUserData } from "@types";

import { useGetData } from '../lib/useGetData';
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

    const onChangeData = (fieldName: string, fieldValue: string) => {
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