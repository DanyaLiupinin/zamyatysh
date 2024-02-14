import { FC } from "react";

import './SizeButton.scss';

type SizeButtonProps = {
    size: string,
    onSizeClick: any,
    chosenSize: string
}

export const SizeButton: FC<SizeButtonProps> = ({size, onSizeClick, chosenSize}) => {
    return (
        <div
            onClick={() => onSizeClick(size.toUpperCase())}
            className={`sizeButton ${chosenSize === size.toUpperCase() ? 'sizeButton_active' : ''}`}>
            <p>{size.toUpperCase()}</p>
        </div>
    );  
};