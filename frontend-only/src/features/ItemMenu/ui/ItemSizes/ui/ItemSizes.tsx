import { FC } from "react";
import { SizeButton } from "@components";

import { ItemSizesProps } from '../../../model/types/types';
import './ItemSizes.scss';

export const ItemSizes: FC<ItemSizesProps> = ({ item, onSizeClick, chosenSize }) => {
    return (
        <div className='itemSizes'>
            {
                item?.sizes && item.sizes.map((size: string, i: number) => {
                    return (
                        <SizeButton
                            key={i}
                            size={size}
                            onSizeClick={onSizeClick}
                            chosenSize={chosenSize}
                        />
                    );
                })
            }
        </div>
    )
}