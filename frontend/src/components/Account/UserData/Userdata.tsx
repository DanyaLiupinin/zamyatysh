import "./Userdata.scss";

import React, {useState} from 'react';

const Userdata = ({ data, changeDataHandler }: any) => {

    const [isEditData, setEditData] = useState(false);

    const onUpdateData = () => {
        setEditData(false)
    }


    return (
        <form className='userdata'>

            <div className='data'>
                <p className='data__name'>name: </p>
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
                <p className='data__name'>email: </p>
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
                <p className='data__name'>phone: </p>
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
                <p className='data__name'>country: </p>
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
                <p className='data__name'>city: </p>
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
                <p className='data__name'>street: </p>
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
                <p className='data__name'>planta: </p>
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
                <p className='data__name'>piso: </p>
                <input
                disabled={!isEditData}
                    min={1}
                    max={10}
                    className='data__content'
                    value={data.piso}
                    onChange={(e) => changeDataHandler("piso", e.target.value)}
                />
            </div>

            <div className='userdata__buttons' >
                <button onClick={() => setEditData(true)} disabled={isEditData ? true : false}>Edit</button>
                <button type='submit' disabled={isEditData ? false : true} onClick={onUpdateData}>Save</button>
            </div>

        </form>
    );
};

export default Userdata;
