import React, { useState } from 'react';
import './ItemCard.scss'
import Header from '../Header/Header'
import Item from '../Item/Item'

const array = require('../../images/arrayback.png')

const raz = require('../../images/aboutUs.png')

const dva = require('../../images/burger.png')

const tri = require('../../images/tshirt.png')

const arrayLeft = require('../../images/lapkaleft.png')
const arrayRight = require('../../images/lapkaright.png')

const ItemCard: React.FC<any> = () => {

    const [imageActive, setImageActive] = useState<number>(1)
    const [offset, setOffset] = useState<number>(0)
    const sliderLine = React.useRef<HTMLInputElement>(null)

    const items = [
        {
            id: 1,
            image: tri,
        },
        {
            id: 2,
            image: tri,
        },
        {
            id: 3,
            image: tri,
        }
    ]


    //let offset = 0 // смещение от левого края
    //let imageActive = 1

    //const sliderLine = document.querySelector<HTMLElement>('.itemCard__slider-line')

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
                                        items.map((i) => {
                                            return (
                                                <img className='itemCard__slider-image' key={i.id} src={i.image} alt="raz" />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='itemCard__mini-icons'>

                            {
                                items.map((i) => {
                                    return (
                                        <img className={`itemCard__mini-icon ${imageActive === i.id ? 'itemCard__mini-icon_active' : ''}`} key={i.id} src={i.image} alt="raz" />
                                    )
                                })
                            }


                        </div>
                    </div>

                    <p>vyjuifhhh</p>


                </div>


            </section>
        </>
    )
}

export default ItemCard