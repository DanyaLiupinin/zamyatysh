
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


import { ICategory, IItem } from '@types';

export const items: IItem[] = [
    {   /// TSHIRTS ID 1 - 6    
        id: 1,
        title: {
            ru: 'замятыш',
            en: 'zamyatysh',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
            en: 'default description',
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
        images: [tshirtWhite, tshirtWhite, tshirtWhite],
        sizes: ['s', 'm', 'l']
    },
    {   
        id: 2,
        title: {
            ru: 'замятыш',
            en: 'zamyatysh',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
            en: 'default description',
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
        images: [tshirtBlue, tshirtBlue, tshirtBlue],
        sizes: ['s', 'm', 'l']
    },
    {   
        id: 3,
        title: {
            ru: 'замятыш',
            en: 'zamyatysh',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
            en: 'default description',
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
        images: [tshirtGreen, tshirtGreen, tshirtGreen],
        sizes: ['s', 'm', 'l']
    },
    {   
        id: 4,
        title: {
            ru: 'замятыш',
            en: 'zamyatysh',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
            en: 'default description',
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
        images: [tshirtViolet, tshirtViolet, tshirtViolet],
        sizes: ['s', 'm', 'l']
    },
    {   
        id: 5,
        title: {
            ru: 'замятыш',
            en: 'zamyatysh',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
            en: 'default description',
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
        images: [tshirtGreenFull, tshirtGreenFull, tshirtGreenFull],
        sizes: ['s', 'm', 'l']
    },
    {   
        id: 6,
        title: {
            ru: 'замятыш',
            en: 'zamyatysh',
        },
        category: {
            ru: 'футболки',
            en: 'tshirts',
        },
        description: {
            ru: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
            en: 'default description',
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
        images: [tshirtAquamarin, tshirtAquamarin, tshirtAquamarin],
        sizes: ['s', 'm', 'l']
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
            ru: 'толстовки',
            en: 'sweatshots'
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
