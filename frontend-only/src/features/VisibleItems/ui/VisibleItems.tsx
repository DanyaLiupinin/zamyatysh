import { FC } from "react";
import { IItem, TLanguage } from "@types";
import { ShopCard } from "@components";
import { useSelector } from "react-redux";
import { selectLocale } from "../model/selectors";

type VisibleItemsProps = {
    visibleItems: IItem[],
}

export const VisibleItems: FC<VisibleItemsProps> = ({ visibleItems }) => {
    const locale: TLanguage = useSelector(selectLocale);
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