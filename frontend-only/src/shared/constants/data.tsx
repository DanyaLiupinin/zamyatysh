
import tshirtWhite from '@images/products/tshirt-white.png';
import tshirtBlue from '@images/products/tshirt-blue.png';
import tshirtGreen from '@images/products/tshirt-green.png';
import tshirtGreenFull from '@images/products/tshirt-green-full.png';
import tshirtViolet from '@images/products/tshirt-violet.png';
import tshirtAquamarin from '@images/products/tshirt-aquamarin.png';

import hoodieWhite from '@images/products/hoodie-white.png';
import hoodieGreen from '@images/products/hoodie-green.png';
import hoodieBlue from '@images/products/hoodie-blue.png';
import hoodieRose from '@images/products/hoodie-rose.png';

import longsliveWhite from '@images/products/longslive-white.png';
import longsliveGreen from '@images/products/longslive-green.png';
import longsliveBlue from '@images/products/longslive-blue.png';
import longsliveRed from '@images/products/longslive-red.png';
import longsliveYellow from '@images/products/longslive-yellow.png';

import sweatshirtWhite from '@images/products/sweatshirt-white.png';
import sweatshirtGreen from '@images/products/sweatshirt-green.png';
import sweatshirtBlue from '@images/products/sweatshirt-blue.png';
import sweatshirtOrange from '@images/products/sweatshirt-orange.png';
import sweatshirtViolet from '@images/products/sweatshirt-violet.png';

import pinWhite from '@images/products/pin-white.png';


import { ICategory, IItem } from '@types';

export const items: IItem[] = [
    {   /// TSHIRTS ID 1 - 6    
        id: 1,
        title: {
            ru: 'футболка замятыш белая',
            en: 'zama tshirt white',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'Белая футболка "Замятыш" представляет собой идеальное сочетание свободы и небрежности в стиле лягушачий андер. Мягкий оверсайз фасон создает легкость и комфорт в каждом движении, придавая образу непринужденный шарм.',
            en: 'The white Zama T-shirt is the perfect combination of freedom and carelessness in the style of a froggy under. The soft oversize style creates lightness and comfort in every movement, giving the image a relaxed charm.',
        },
        material: {
            ru: 'Хлопок 100%',
            en: 'Cotton 100%',
        },
        style: {
            ru: 'Легкий оверсайз',
            en: 'Easy oversize',
        },
        price: '1500',
        images: [tshirtWhite, tshirtWhite, tshirtWhite],
        sizes: ['xs', 's', 'm', 'l', 'xl']
    },
    {
        id: 2,
        title: {
            ru: 'футболка замятыш синяя',
            en: 'zama tshirt blue',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'Футболка "Лягушачья синева" приносит в мир стиля свежий акцент, сочетая в себе уникальный фасон с привлекательным синим оттенком. Ее свободный оверсайз крой придаст вашему образу непринужденный стиль, а яркая синяя палитра добавит нотку освежающей элегантности.',
            en: 'Blue "Zama" T-shirt brings a fresh accent to the world of style, combining a unique style with an attractive blue shade. Her loose oversize cut will give your look a relaxed style, and the bright blue palette will add a touch of refreshing elegance.',
        },
        material: {
            ru: 'Хлопок 100%',
            en: 'Cotton 100%',
        },
        style: {
            ru: 'Легкий оверсайз',
            en: 'Easy oversize',
        },
        price: '1500',
        images: [tshirtBlue, tshirtBlue, tshirtBlue],
        sizes: ['xs', 's', 'm', 'l', 'xl']
    },
    {
        id: 3,
        title: {
            ru: 'футболка замятыш оливковая',
            en: 'zama tshirt olive',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'Футболка "Замятыш поедатель оливок" вносит ноту тепла и стиля в ваш гардероб, сочетая уникальный фасон с насыщенным оливковым оттенком. Ее свободный оверсайз крой создает образ, который сочетает в себе непринужденность и стиль, а глубокий оттенок оливки придает ему особую элегантность',
            en: 'The T-shirt "Zama the olive eater" brings a note of warmth and style to your wardrobe, combining a unique style with a rich olive shade. Her loose oversize cut creates an image that combines ease and style, and the deep shade of olive gives it a special elegance',
        },
        material: {
            ru: 'Хлопок 100%',
            en: 'Cotton 100%',
        },
        style: {
            ru: 'Легкий оверсайз',
            en: 'Easy oversize',
        },
        price: '1500',
        images: [tshirtGreen, tshirtGreen, tshirtGreen],
        sizes: ['xs', 's', 'm', 'l', 'xl']
    },
    {
        id: 4,
        title: {
            ru: 'футболка замятыш пурпурная',
            en: 'zama tshirt purple',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'Футболка "Лягушачий пурпур" привносит в ваш стиль изысканный акцент, сочетая эксклюзивный фасон с глубоким пурпурным оттенком. Ее свободный оверсайз крой создает непринужденный и стильный образ, а насыщенный цвет пурпура придает ему роскошный и загадочный характер.',
            en: 'Purple "Zama" T-shirt brings an exquisite accent to your style, combining an exclusive style with a deep purple shade. Her loose oversize cut creates a relaxed and stylish look, and the rich purple color gives it a luxurious and mysterious character.',
        },
        material: {
            ru: 'Хлопок 100%',
            en: 'Cotton 100%',
        },
        style: {
            ru: 'Легкий оверсайз',
            en: 'Easy oversize',
        },
        price: '1500',
        images: [tshirtViolet, tshirtViolet, tshirtViolet],
        sizes: ['xs', 's', 'm', 'l', 'xl']
    },
    {
        id: 5,
        title: {
            ru: 'футболка замятыш зеленая',
            en: 'zama tshirt green',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'Футболка "В траве сидел замятыш" приносит свежесть и живость в ваш гардероб, сочетая уникальный фасон с освежающим зеленым оттенком. Ее свободный оверсайз крой создает стильный образ, который объединяет непринужденность и модный акцент, а насыщенный цвет зелени придает ему динамичность.',
            en: 'Green "Zama" T-shirt brings freshness and liveliness to your wardrobe, combining a unique style with a refreshing green shade. Her loose oversize cut creates a stylish look that combines ease and a fashionable accent, and the rich color of greenery gives it dynamism.',
        },
        material: {
            ru: 'Хлопок 100%',
            en: 'Cotton 100%',
        },
        style: {
            ru: 'Легкий оверсайз',
            en: 'Easy oversize',
        },
        price: '1500',
        images: [tshirtGreenFull, tshirtGreenFull, tshirtGreenFull],
        sizes: ['xs', 's', 'm', 'l', 'xl']
    },
    {
        id: 6,
        title: {
            ru: 'футболка замятыш аквамарин',
            en: 'zama tshirt aquamarine',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'Футболка "Аквамариновая Эссенция" приносит в ваш гардероб волны свежести и изысканности, сочетая стильный фасон с невероятным оттенком аквамарина. Ее свободный оверсайз крой создает непринужденный и модный образ, а уникальный цвет подчеркивает освежающую элегантность.',
            en: 'Aquamarine "Zama" T-shirt brings waves of freshness and sophistication to your wardrobe, combining a stylish style with an incredible shade of aquamarine. Her loose oversize cut creates a relaxed and fashionable look, and the unique color emphasizes refreshing elegance.',
        },
        material: {
            ru: 'Хлопок 100%',
            en: 'Cotton 100%',
        },
        style: {
            ru: 'Легкий оверсайз',
            en: 'Easy oversize',
        },
        price: '1500',
        images: [tshirtAquamarin, tshirtAquamarin, tshirtAquamarin],
        sizes: ['xs', 's', 'm', 'l', 'xl']
    },



    /// HOODIE id 7 - 10

    {
        id: 7,
        title: {
            ru: 'худи',
            en: 'hoodie',
        },
        category: {
            ru: 'худи',
            en: 'hoodies',
        },
        description: {
            ru: 'описание худи',
            en: 'hoodie description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [hoodieWhite, hoodieWhite, hoodieWhite],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 8,
        title: {
            ru: 'худи',
            en: 'hoodie',
        },
        category: {
            ru: 'худи',
            en: 'hoodies',
        },
        description: {
            ru: 'описание худи',
            en: 'hoodie description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [hoodieBlue, hoodieBlue, hoodieBlue],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 9,
        title: {
            ru: 'худи',
            en: 'hoodie',
        },
        category: {
            ru: 'худи',
            en: 'hoodies',
        },
        description: {
            ru: 'описание худи',
            en: 'hoodie description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [hoodieGreen, hoodieGreen, hoodieGreen],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 10,
        title: {
            ru: 'худи',
            en: 'hoodie',
        },
        category: {
            ru: 'худи',
            en: 'hoodies',
        },
        description: {
            ru: 'описание худи',
            en: 'hoodie description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [hoodieRose, hoodieRose, hoodieRose],
        sizes: ['s', 'm', 'l']
    },


    /// LONGSLIVE 

    {
        id: 11,
        title: {
            ru: 'лонгслив',
            en: 'longslive',
        },
        category: {
            ru: 'лонгсливы',
            en: 'longslives',
        },
        description: {
            ru: 'описание лонгслива',
            en: 'longslive description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [longsliveWhite, longsliveWhite, longsliveWhite],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 12,
        title: {
            ru: 'лонгслив',
            en: 'longslive',
        },
        category: {
            ru: 'лонгсливы',
            en: 'longslives',
        },
        description: {
            ru: 'описание лонгслива',
            en: 'longslive description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [longsliveGreen, longsliveGreen, longsliveGreen],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 13,
        title: {
            ru: 'лонгслив',
            en: 'longslive',
        },
        category: {
            ru: 'лонгсливы',
            en: 'longslives',
        },
        description: {
            ru: 'описание лонгслива',
            en: 'longslive description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [longsliveBlue, longsliveBlue, longsliveBlue],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 14,
        title: {
            ru: 'лонгслив',
            en: 'longslive',
        },
        category: {
            ru: 'лонгсливы',
            en: 'longslives',
        },
        description: {
            ru: 'описание лонгслива',
            en: 'longslive description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [longsliveRed, longsliveRed, longsliveRed],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 15,
        title: {
            ru: 'лонгслив',
            en: 'longslive',
        },
        category: {
            ru: 'лонгсливы',
            en: 'longslives',
        },
        description: {
            ru: 'описание лонгслива',
            en: 'longslive description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [longsliveYellow, longsliveYellow, longsliveYellow],
        sizes: ['s', 'm', 'l']
    },


    /// SWEATSHIRTS


    {
        id: 16,
        title: {
            ru: 'свитшот',
            en: 'sweatshirt',
        },
        category: {
            ru: 'свитшоты',
            en: 'sweatshirts',
        },
        description: {
            ru: 'описание свитшота',
            en: 'sweatshirts description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [sweatshirtWhite, sweatshirtWhite, sweatshirtWhite],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 17,
        title: {
            ru: 'свитшот',
            en: 'sweatshirt',
        },
        category: {
            ru: 'свитшоты',
            en: 'sweatshirts',
        },
        description: {
            ru: 'описание свитшота',
            en: 'sweatshirts description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [sweatshirtBlue, sweatshirtBlue, sweatshirtBlue],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 18,
        title: {
            ru: 'свитшот',
            en: 'sweatshirt',
        },
        category: {
            ru: 'свитшоты',
            en: 'sweatshirts',
        },
        description: {
            ru: 'описание свитшота',
            en: 'sweatshirts description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [sweatshirtGreen, sweatshirtGreen, sweatshirtGreen],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 19,
        title: {
            ru: 'свитшот',
            en: 'sweatshirt',
        },
        category: {
            ru: 'свитшоты',
            en: 'sweatshirts',
        },
        description: {
            ru: 'описание свитшота',
            en: 'sweatshirts description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [sweatshirtOrange, sweatshirtOrange, sweatshirtOrange],
        sizes: ['s', 'm', 'l']
    },
    {
        id: 20,
        title: {
            ru: 'свитшот',
            en: 'sweatshirt',
        },
        category: {
            ru: 'свитшоты',
            en: 'sweatshirts',
        },
        description: {
            ru: 'описание свитшота',
            en: 'sweatshirts description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [sweatshirtViolet, sweatshirtViolet, sweatshirtViolet],
        sizes: ['s', 'm', 'l']
    },


    /// PIN

    {
        id: 21,
        title: {
            ru: 'значок',
            en: 'pin',
        },
        category: {
            ru: 'аксессуары',
            en: 'accessories',
        },
        description: {
            ru: 'значок описание',
            en: 'pin description',
        },
        material: {
            ru: 'материальный',
            en: 'material',
        },
        style: {
            ru: 'фасоновый',
            en: 'style',
        },
        price: '1500',
        images: [pinWhite, pinWhite, pinWhite],
        sizes: ['s', 'm', 'l']
    },
];

export const categories: ICategory[] = [
    {
        id: 2,
        title: {
            ru: 'футболки',
            en: 'tshirts'
        },
    },
    {
        id: 3,
        title: {
            ru: 'худи',
            en: 'hoodies'
        },
    },
    {
        id: 4,
        title: {
            ru: 'лонгсливы',
            en: 'longslives'
        },
    },
    {
        id: 5,
        title: {
            ru: 'свитшоты',
            en: 'sweatshirts'
        },
    },
    {
        id: 6,
        title: {
            ru: 'аксессуары',
            en: 'accessories'
        },
    },
    {
        id: 7,
        title: {
            ru: 'стикеры',
            en: 'stickers'
        },
    },
    {
        id: 8,
        title: {
            ru: 'другое',
            en: 'other'
        },
    }
];

export const BASE_URL = 'https://zamyatysh-backend-zamyatysh-back-railway-pr-13.up.railway.app';
