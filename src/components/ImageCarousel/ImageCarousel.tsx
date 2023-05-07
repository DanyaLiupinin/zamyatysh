import React, { useState } from 'react';
import './ImageCarousel.scss'


const arrayLeft = require('../../images/lapkaleft.png')
const arrayRight = require('../../images/lapkaright.png')


const ImageCarousel = ({ item }: {
    item: {
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
}) => {

    const [imageActive, setImageActive] = useState<number>(1)
    const [offset, setOffset] = useState<number>(0)
    const sliderLine = React.useRef<HTMLInputElement>(null)

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
        <div>
            <div className='imageCarousel'>
                <div className='imageCarousel__slider-wrapper'>

                    <button className='imageCarousel__slider-button imageCarousel__slider-button_type_left' type='button' onClick={onClickPrev}>
                        <img src={arrayLeft} alt='ll'></img>
                    </button>
                    <button className='imageCarousel__slider-button imageCarousel__slider-button_type_right' type='button' onClick={onClickNext}>
                        <img src={arrayRight} alt='ll'></img>
                    </button>

                    <div className='imageCarousel__slider'>
                        <div className='imageCarousel__slider-line' ref={sliderLine}>
                            {
                                item.image.map((i: any, index) => {
                                    return (
                                        <img key={index} src={i} alt="alt" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='imageCarousel__mini-icons'>
                    {
                        item.image.map((i: any, index) => {
                            return (
                                <img className={`imageCarousel__mini-icon ${imageActive === index + 1 ? 'imageCarousel__mini-icon_active' : ''}`} key={index} src={i} alt="raz" />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel