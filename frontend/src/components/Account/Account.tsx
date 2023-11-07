import { useSelector } from "react-redux";
import React, {useState} from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Userdata from "./UserData/Userdata";
import "./Account.scss";
import avatar from "../../images/logo.svg";

const Account = () => {
    const loggedIn = useSelector((state: any) => state.user.loggedIn);

    const [userData, setUserData] = useState<any>({
        name: 'bla bla bla',
        email: 'bla bla bla @ mail.ru',
        phone: '123 456 789'
    });

    const onChangeData = (fieldName: any, fieldValue: String) => {
        setUserData((prevData: any) => ({
            ...prevData,
            [fieldName]: fieldValue,
        }));
    }


    return (
        <>
            <Header />
            {/*<section className='account'>we are building account page c:</section>*/}
            {loggedIn && (
                <section className='account'>
                    <div className='account__container'>
                        <div className='account__user-card'>
                            <div className='account__avatar-container'>
                                <img src={avatar} alt='...' />
                            </div>
                            
                    
                            <Userdata changeDataHandler={onChangeData} data={userData} />

                        </div>
                        <div className='account__user-orders'></div>
                    </div>
                </section>
            )}
            <Footer />
        </>
    );
};

export default Account;
