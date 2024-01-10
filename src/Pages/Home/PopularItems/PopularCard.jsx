import React from 'react';

const PopularCard = ({item}) => {
    const {strMealThumb, strMeal, Name, ImageUrl} = item;
    return (
        <div className="card">
            <figure><img src={ImageUrl} alt="" /></figure>
            <p>{Name}</p>
        </div>
    );
};

export default PopularCard;