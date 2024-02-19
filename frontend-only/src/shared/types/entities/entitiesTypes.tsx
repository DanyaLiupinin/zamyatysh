export interface ICategory {
    id: number,
    title: {
        ru: string,
        en: string
    }
}

export interface IItem {
    id: number;
    title: {
        ru: string;
        en: string;
    };
    category: {
        ru: string;
        en: string;
    };
    description: {
        ru: string;
        en: string;
    };
    material: {
        ru: string;
        en: string;
    };
    style: {
        ru: string;
        en: string;
    };
    price: string;
    images: any;
    sizes: string[];
};

export interface IBasketShort {
    id: string,
    size: string,
    price: string
}

export interface IUserData {
    username: string,
    name: string,
    email: string,
    phone: string,
    country: string,
    city: string,
    street: string,
    floor: string,
    apartment: string
}