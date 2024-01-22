import React, { useEffect, useState } from 'react';
import PopularItemCard from './PopularItemCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../PopularItems/PopularItems.css';

const ItemSlider = () => {
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
            .then(res => res.json())
            .then(data => setCardInfo(data.Items));
    }, [])
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };    
    return (
        <Slider {...settings}>
            {  
                cardInfo.map((item) =>
                <PopularItemCard
                    key={item.Id}
                    item={item}
                >
                </PopularItemCard>
            )}
        </Slider>
    );
};

export default ItemSlider;