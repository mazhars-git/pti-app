import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';

const PopularItems = () => {
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
        .then(res => res.json())
        .then(data => setCardInfo(data.Items));
    }, [])

    console.log(cardInfo)
    return (
        <div className="py-5">
            <div className="flex justify-between">
                <p className="font-semibold">Popular</p>
                <p className="text-orange-500 font-semibold">Add More</p>
            </div>
            <div className="grid grid-cols-4">
                {
                   cardInfo.map(item => <PopularCard key={item.id} item={item}></PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularItems;