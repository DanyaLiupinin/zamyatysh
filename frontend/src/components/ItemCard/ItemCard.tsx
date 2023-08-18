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


const ItemCard: React.FC<any> = () => {

    const [item, setItem] = useState<any>();
    const [chosenSize, setChosenSize] = useState<string>('');

    const navigate = useNavigate();
    const slug = useParams();
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
                            <p>Описание товара:</p>
                            <p>{item.description}</p>
                            <p>материал: {item.material}</p>
                            <p>фасон: {item.style}</p>
                            <p>артикул: {item.articul}</p>
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