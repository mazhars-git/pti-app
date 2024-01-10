import React, { useEffect, useState } from 'react';
import PopularItemCard from './PopularItemCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../PopularItems/PopularItems.css';

const ItemSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };

    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => setCardInfo(data.Items));
    }, [])
    return (
        <Slider {...settings}>
            {  
                cardInfo.map((item) =>
                <PopularItemCard
                    key={item.id}
                    item={item}
                >
                </PopularItemCard>
            )}
        </Slider>
    );
};

export default ItemSlider;