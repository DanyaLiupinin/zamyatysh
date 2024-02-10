import { IItem } from "@types";
import { FC } from "react";
import { SizeButton } from "@components";

import './ItemSizes.scss';

type ItemSizesProps = {
    item: IItem,
    onSizeClick: any,
    chosenSize: string
}

export const ItemSizes: FC<ItemSizesProps> = ({item, onSizeClick, chosenSize}) => {
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