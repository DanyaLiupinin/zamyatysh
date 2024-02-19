import { FC } from "react";
import { useSelector } from "react-redux";
import { IItem, TLanguage } from "@types";
import { ShopCard } from "@components";

import { selectLocale } from "../model/selectors/selectors";
import { VisibleItemsProps } from "../model/types/types";

export const VisibleItems: FC<VisibleItemsProps> = ({ visibleItems }) => {
    const locale: TLanguage = useSelector(selectLocale);
    console.log(visibleItems)
    return (
        <>
            {
                visibleItems && visibleItems?.length > 0 &&
                visibleItems.map((i: IItem) => {
                    return (
                        <ShopCard
                            title={i.title[locale]}
                            price={i.price}
                            images={i.images}
                            key={i.id}
                            id={i.id}
                        />
                    );
                })
            }
        </>
    );
};