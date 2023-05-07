import React, { useState } from 'react';
import './ItemCard.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

import ImageCarousel from '../ImageCarousel/ImageCarousel';
import ItemInformation from '../ItemInformation/ItemInformation';

const array = require('../../images/arrayback.png')


const tri = require('../../images/tshirt.png')





const ItemCard: React.FC<any> = () => {


    const item:
        {
            category: string,
            title: string,
            price: string,
            id: number,
            image: any[],
            description: string,
            material: string,
            style: string, //фасон
            articul: string
        }
        =
    {
        category: 'футболка',
        title: 'замятыш',
        price: '1500 кваков', 
        id: 1,
        image: [tri, tri, tri],
        description: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
        material: 'матриеальный',
        style: 'фасоновый', //фасон
        articul: 'артикульный'
    } // добавить название товара, цену, возможные размеры

    return (
        <>
            <Header />
            <section className='itemCard'>
                <button className='itemCard__navigation' type='button'>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    Назад
                </button>
                <div className='itemCard__card-container'>
                    <ImageCarousel
                        item={item}
                    />
                    <ItemInformation
                        item={item}
                    />      
                </div>
                <div className='itemCard__item-description'>
                    <p>Описание товара:</p>
                    <p>{item.description}</p>
                    <p>материал: {item.material}</p>
                    <p>фасон: {item.style}</p>
                    <p>артикул: {item.articul}</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ItemCard