import { IUserData } from '@types';
import { useEffect, Dispatch, SetStateAction } from 'react';


export const useGetData = (setUserData: Dispatch<SetStateAction<IUserData>>) => {
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const userData = JSON.parse(storedData);
            setUserData((prevData: IUserData) => ({ ...prevData, ...userData }));
        }
    }, [setUserData]);
};
