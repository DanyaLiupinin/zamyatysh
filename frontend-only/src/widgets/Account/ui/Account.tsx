import { Userdata, Orders } from "@widgets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './Account.scss';

interface IUserData {
    username: string,
    name: string,
    email: string,
    phone: string,
    country: string,
    city: string,
    street: string,
    floor: string,
    apartment: string
}

export const Account = () => {
    
    const loggedIn = useSelector((state: any) => state.user.loggedIn);

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

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const userData = JSON.parse(storedData);
            setUserData((prevData: IUserData) => ({ ...prevData, ...userData }));
        }
    }, []);


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