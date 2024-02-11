import { FC, ReactNode } from "react";
import { TLanguage } from "@types";
import { useSelector } from "react-redux";
import avatar from "@images/logo.svg";

import content from '../../../locale/Userdata.json';
import './UserForm.scss';

type UserFormType = {
    data: any;
    changeDataHandler: any;
    children: ReactNode;
    isEditData: boolean;
}

export const UserForm: FC<UserFormType> = ({ data, changeDataHandler, children, isEditData }) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <form className='userForm'>
            <div className='userForm__avatar'>
                <img src={avatar} alt='...' />
            </div>
            <div className='data'>
                <p className='data__name'>{'username'}:</p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='data__content'
                    value={data.username}
                    onChange={(e) => changeDataHandler("username", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.name[locale]}:</p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='data__content'
                    value={data.name}
                    onChange={(e) => changeDataHandler("name", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.email[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='data__content'
                    value={data.email}
                    onChange={(e) => changeDataHandler("email", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.phone[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='data__content'
                    value={data.phone}
                    onChange={(e) => changeDataHandler("phone", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.country[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={30}
                    className='data__content'
                    value={data.country}
                    onChange={(e) => changeDataHandler("country", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.city[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={30}
                    className='data__content'
                    value={data.city}
                    onChange={(e) => changeDataHandler("city", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.street[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={30}
                    className='data__content'
                    value={data.street}
                    onChange={(e) => changeDataHandler("street", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.floor[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={5}
                    className='data__content'
                    value={data.planta}
                    onChange={(e) => changeDataHandler("planta", e.target.value)}
                />
            </div>
            <div className='data'>
                <p className='data__name'>{content.apartment[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={10}
                    className='data__content'
                    value={data.piso}
                    onChange={(e) => changeDataHandler("piso", e.target.value)}
                />
            </div>
            {children}
        </form>
    );
};
