import { useEffect } from "react";
import { getFinalPrice } from "@handlers";

export const setSetFinalPrice = ({ basketShort, setFinalPrice }: any) => {
    useEffect(() => {
        const price = getFinalPrice(basketShort);
        setFinalPrice(price as number);
    }, [basketShort]);
}