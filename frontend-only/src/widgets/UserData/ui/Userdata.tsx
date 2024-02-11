import "./Userdata.scss";

import { useState } from "react";
import { useSelector } from "react-redux";

import avatar from "@images/logo.svg";
import { TLanguage } from "@types";
import content from '../../../locale/Userdata.json';

import { Logout, UserForm } from "@features";

export const Userdata = ({ data, changeDataHandler }: any) => {

    const [isEditData, setEditData] = useState(false);

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    const onUpdateData = () => {
        localStorage.setItem('userData', JSON.stringify(data));
        setEditData(false);
    };

    return (
        <section className='userdata'>
            <div className='avatar-container'>
                <img src={avatar} alt='...' />
            </div>


                <UserForm
                    data={data}
                    isEditData={isEditData}
                    changeDataHandler={changeDataHandler}
                >

                    <div className='userdata__buttons'>
                        <button
                            onClick={() => setEditData(true)}
                            disabled={isEditData ? true : false}
                        >
                            {content.edit[locale]}
                        </button>
                        <button
                            type='submit'
                            disabled={isEditData ? false : true}
                            onClick={onUpdateData}
                        >
                            {content.save[locale]}
                        </button>
                    </div>
                    <Logout />

                </UserForm>

        </section>
    );
};
