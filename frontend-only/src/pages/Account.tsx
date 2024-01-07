import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Userdata from "../components/Account/UserData/Userdata";
import Orders from "../components/Account/Orders/Orders";
import './styles/Account/Account.scss';

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

const Account = () => {
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
        setUserData((prevData: any) => ({
            ...prevData,
            [fieldName]: fieldValue,
        }));
    };

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const userData = JSON.parse(storedData);
            setUserData((prevData: IUserData) => ({ ...prevData, ...userData }));
        }
    }, []);

    console.log(userData)

    return (
        <>
            <Header />
            {loggedIn && (
                <section className='account'>
                    <div className='account__container'>
                        <Userdata
                            changeDataHandler={onChangeData}
                            data={userData} />
                        <Orders />
                    </div>
                </section>
            )}
            <Footer />
        </>
    );
};

export default Account;
