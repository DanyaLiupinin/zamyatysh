export const getFinalPrice = (items: any) => {
    if (items && items.length > 0) {
        const regex = /\d+/g;
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            const itemPrice = Number(items[i].price.match(regex)[0]);
            total = total + itemPrice;
        }
        
        return total;
    }
};