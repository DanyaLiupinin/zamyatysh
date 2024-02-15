import { FC, ReactNode } from "react";
import { TLanguage } from "@types";
import { useSelector } from "react-redux";
import avatar from "@images/logo.svg";

import content from '@locale/UserForm.json';
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
            <div className='userInput'>
                <p className='userInput__label'>{'username'}:</p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='userInput__content'
                    value={data.username}
                    onChange={(e) => changeDataHandler("username", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.name[locale]}:</p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='userInput__content'
                    value={data.name}
                    onChange={(e) => changeDataHandler("name", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.email[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='userInput__content'
                    value={data.email}
                    onChange={(e) => changeDataHandler("email", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.phone[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={25}
                    className='userInput__content'
                    value={data.phone}
                    onChange={(e) => changeDataHandler("phone", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.country[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={30}
                    className='userInput__content'
                    value={data.country}
                    onChange={(e) => changeDataHandler("country", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.city[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={30}
                    className='userInput__content'
                    value={data.city}
                    onChange={(e) => changeDataHandler("city", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.street[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={30}
                    className='userInput__content'
                    value={data.street}
                    onChange={(e) => changeDataHandler("street", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.floor[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={5}
                    className='userInput__content'
                    value={data.floor}
                    onChange={(e) => changeDataHandler("floor", e.target.value)}
                />
            </div>
            <div className='userInput'>
                <p className='userInput__label'>{content.apartment[locale]}: </p>
                <input
                    disabled={!isEditData}
                    min={1}
                    max={10}
                    className='userInput__content'
                    value={data.apartment}
                    onChange={(e) => changeDataHandler("apartment", e.target.value)}
                />
            </div>
            {children}
        </form>
    );
};
