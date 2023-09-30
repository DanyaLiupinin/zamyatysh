import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './ItemCard.scss';

import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
// eslint-disable-next-line import/order
import ItemInformation from '../ItemInformation/ItemInformation';

import content from './locale.json';
import { TLocale } from '../../types/components';

//import items from '../../constants/items';

import array from '../../images/historyArray.svg';
import { getItem } from '../../utils/api';


const ItemCard: React.FC<any> = () => {

    const [item, setItem] = useState<any>();
    const [chosenSize, setChosenSize] = useState<string>('');

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const navigate = useNavigate();
   
    const id = useParams();
    

    useEffect(() => {
        if (locale && id)
        getItem({
            id: id.id,
            locale: locale
        })
        .then((res) => {
            setItem(res)});
    }, [locale]);

    return (
        <>
            <Header />
            <section className='itemCard'>
                <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    {content.goBack[locale]}
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
                            <h3>{content.description[locale]}:</h3>
                            <p>{item.description}</p>
                            <h3 className='itemCard__item-description-inline'>{content.material[locale]}: </h3>
                            <p>{item.material}</p>
                            <h3 className='itemCard__item-description-inline'>{content.style[locale]}:</h3>
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