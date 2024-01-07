import "./Userdata.scss";

import { useState } from "react";
import { useSelector } from "react-redux";

import avatar from "../../../images/logo.svg";
import { TLocale } from "../../../types/components";
import content from '../../../locale/Userdata.json';


const Userdata = ({ data, changeDataHandler }: any) => {

    const [isEditData, setEditData] = useState(false);

    const locale: TLocale = useSelector((state: any) => state.items.locale);
    
    const onUpdateData = () => {
        localStorage.setItem('userData', JSON.stringify(data));
        setEditData(false);
    };

    return (
        <section className='userdata'>
            <div className='avatar-container'>
                <img src={avatar} alt='...' />
            </div>
            <form className='userdata__form'>

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
            </form>
            </section>
    );
};

export default Userdata;
