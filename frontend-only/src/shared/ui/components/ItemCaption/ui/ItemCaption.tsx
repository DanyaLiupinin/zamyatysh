import { FC, ReactNode } from 'react';
import './ItemCaption.scss';

type ItemCaptionProps = {
    children: ReactNode
}

export const ItemCaption: FC<ItemCaptionProps> = ({children}) => {
    return (
        <p className='itemMenu__caption'>{children}</p>
    );
};