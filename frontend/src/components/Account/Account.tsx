import { useSelector } from "react-redux";
import React, { useState } from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Userdata from "./UserData/Userdata";
import Orders from "./Orders/Orders";
import "./Account.scss";

const Account = () => {
    const loggedIn = useSelector((state: any) => state.user.loggedIn);

    const [userData, setUserData] = useState<any>({
        name: 'bla bla bla',
        email: 'bla bla bla @ mail.ru',
        phone: '123 456 789',
        country: 'spain',
        city: 'madrid',
        street: 'gracia 56',
        planta: '3',
        piso: '1'
    });

    const onChangeData = (fieldName: any, fieldValue: String) => {
        setUserData((prevData: any) => ({
            ...prevData,
            [fieldName]: fieldValue,
        }));
    };

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
