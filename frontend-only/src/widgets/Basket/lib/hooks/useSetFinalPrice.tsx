import { useEffect } from "react";
import { getFinalPrice } from "@handlers";

export const useSetFinalPrice = ({ basketShort, setFinalPrice }: any) => {
    useEffect(() => {
        const price = getFinalPrice(basketShort);
        setFinalPrice(price as number);
    }, [basketShort]);
}