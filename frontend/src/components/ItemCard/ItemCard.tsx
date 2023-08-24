import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './ItemCard.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
// eslint-disable-next-line import/order
import ItemInformation from '../ItemInformation/ItemInformation';

//import items from '../../constants/items';

import array from '../../images/historyArray.svg';
import { useSelector } from 'react-redux';

import { getItem } from '../../utils/api';


const ItemCard: React.FC<any> = () => {

    const [item, setItem] = useState<any>();
    const [chosenSize, setChosenSize] = useState<string>('');

    const locale = useSelector((state: any) => state.items.locale);

    const navigate = useNavigate();
   
    const slug = useParams();
    

    useEffect(() => {
        if (locale && slug)
        getItem({
            slug: slug.slug,
            locale: locale
        })
        .then((res) => {
            console.log(res)
            setItem(res)});
    }, [locale]);
/*
    useEffect(() => {
        let currentSlug: number
        if (slug.slug) {
            currentSlug = Number(slug.slug.slice(-1))
        }
        items.forEach((i) => {
            if (i.id === currentSlug) {
                setItem(i)
            }
        })
    })*/

    // создать стор для категорий и товаров и прокидывать сюда
    // посомтреть как в патишейкере сделан переход на коктейли 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <section className='itemCard'>
                <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    Назад
                </button>
                {item !== undefined ?
                    <>
                        <div className='itemCard__card-container'>
                            <ImageCarousel
                                item={item}
                            />
                            <ItemInformation
                                chosenSize={chosenSize}
                                setChosenSize={setChosenSize}
                                item={item}
                            />
                        </div>
                        <div id='description' className='itemCard__item-description'>
                            <h3>Описание товара:</h3>
                            <p>{item.description}</p>
                            <h3 className='itemCard__item-description-inline'>материал: </h3>
                            <p>{item.material}</p>
                            <h3 className='itemCard__item-description-inline'>фасон:</h3>
                            <p>{item.style}</p>
                        </div>
                    </>
                    :
                    <p>oooops</p>
                }
            </section>
            <Footer />
        </>
    );
};

export default ItemCard;