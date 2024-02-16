import { ReactNode, FC } from "react";
import './BasketNotificationContainer.scss';

type BasketNotificationContainerProps = {
    children: ReactNode;
}

export const BasketNotificationContainer : FC<BasketNotificationContainerProps> = ({children}) => {
    return (
        <div className='notificationContainer'>
            {children}
        </div>
    );
};