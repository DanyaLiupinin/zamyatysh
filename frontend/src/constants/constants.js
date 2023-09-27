const isDevelop = process.env.NODE_ENV === 'development';

const categories = [
    'все',
    'футболки',
    'худи',
    'лонгсливы',
    'аксессуары',
    'стикеры',
    'прочее'
];  

export const BASE_URL = isDevelop ? 'http://localhost:1337': 'https://zamyatysh-backend.onrender.com';

export default categories;