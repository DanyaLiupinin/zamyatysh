import React, { useState } from 'react';
import './ItemCard.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

const array = require('../../images/arrayback.png')


const tri = require('../../images/tshirt.png')

const arrayLeft = require('../../images/lapkaleft.png')
const arrayRight = require('../../images/lapkaright.png')



const ItemCard: React.FC<any> = () => {

    const [imageActive, setImageActive] = useState<number>(1)
    const [offset, setOffset] = useState<number>(0)
    const sliderLine = React.useRef<HTMLInputElement>(null)

    const item:
        {
            id: number,
            image: any[],
            description: string,
            material: string,
            style: string, //фасон
            articul: string
        }
        =
    {
        id: 1,
        image: [tri, tri, tri],
        description: 'футболка изготовлена из самых качественных материалов лучшими партными Италии. мы советуем обращаться с футболкой предельно аккуратно и стирать её только вручную',
        material: 'матриеальный',
        style: 'фасоновый', //фасон
        articul: 'артикульный'
    } // добавить название товара, цену, возможные размеры




    const onClickNext = () => {

        if (offset + 340 > 680 && sliderLine.current) { // 340 - ширина картинки // 680 - при условии что 3 картинки
            setImageActive(1)
            setOffset(0)
            sliderLine.current.style.left = 0 + 'px'
        } else {
            setImageActive(imageActive + 1)
            setOffset(offset + 340)
            if (sliderLine.current) sliderLine.current.style.left = (-(offset + 340)) + 'px'
        }
    }


    const onClickPrev = () => {

        if (offset - 340 < 0 && sliderLine.current) {
            setImageActive(3)
            setOffset(680)
            sliderLine.current.style.left = -680 + 'px'
        } else {
            setImageActive(imageActive - 1)
            setOffset(offset - 340)
            if (sliderLine.current) sliderLine.current.style.left = (-(offset - 340)) + 'px'
        }





    }

    return (
        <>
            <Header />
            <section className='itemCard'>

                <button className='itemCard__navigation' type='button'>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    Назад
                </button>
                <div className='itemCard__card-container'>

                    <div className='itemCard__card-slider-container'>
                        <div className='itemCard__slider-wrapper'>
                            <button className='itemCard__slider-button itemCard__slider-button_type_left' type='button' onClick={onClickPrev}>
                                <img className='itemCard__slider-button-image' src={arrayLeft} alt='ll'></img>
                            </button>
                            <button className='itemCard__slider-button itemCard__slider-button_type_right' type='button' onClick={onClickNext}>
                                <img className='itemCard__slider-button-image' src={arrayRight} alt='ll'></img>
                            </button>
                            <div className='itemCard__slider'>
                                <div className='itemCard__slider-line' ref={sliderLine}>
                                    {
                                        item.image.map((i: any, index) => {
                                            return (
                                                <img className='itemCard__slider-image' key={index} src={i} alt="raz" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='itemCard__mini-icons'>

                            {
                                item.image.map((i: any, index) => {
                                    return (
                                        <img className={`itemCard__mini-icon ${imageActive === index + 1 ? 'itemCard__mini-icon_active' : ''}`} key={index} src={i} alt="raz" />
                                    )
                                })
                            }


                        </div>
                    </div>

                    {/* описание сбоку от карточки */}

                    <div className='itemCard__description'>
                        <h2 className='itemCard__item-title'>футболка 'замятыш'</h2>
                        <p className='itemCard__item-price'>1500 кваксов</p>
                        <p>сделать якорную ссылку 'о товаре'</p>
                        <div className='itemCard__sizes'>

                            <div className='itemCard__size'>
                                <p className='itemCard__size-name'>S</p>
                            </div>

                            <div className='itemCard__size'>
                                <p className='itemCard__size-name'>M</p>
                            </div>

                            <div className='itemCard__size'>
                                <p className='itemCard__size-name'>L</p>
                            </div>

                        </div>

                        <p className='itemCard__size-guide'>Как выбрать размер?</p>

                        <button className='itemCard__add-button' type='button'>В корзину</button>
                    </div>


                </div>
                <div className='itemCard__item-characteristics'>
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