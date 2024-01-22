import React from 'react';

const PopularItemCard = ({ item }) => {
    const { strMeal, strMealThumb } = item;

    return (
        <div>
            <div className=''><img className="px-2 rounded-2xl " src={strMealThumb} alt="" /></div>
            <p className='text-center pt-1'>{strMeal}</p>
        </div>
    );
};

export default PopularItemCard;