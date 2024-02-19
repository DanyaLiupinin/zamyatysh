import { FC } from "react";

import { BasketNotificationContainerProps } from "../model/types/types";
import './BasketNotificationContainer.scss';

export const BasketNotificationContainer : FC<BasketNotificationContainerProps> = ({children}) => {
    return (
        <div className='notificationContainer'>
            {children}
        </div>
    );
};