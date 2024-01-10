import React from 'react';

const PopularItemCard = ({ item }) => {
    const { Name, ImageUrl } = item;

    return (
        <div>
            <div className=''><img className="px-2 rounded-xl min-h-screen" src={ImageUrl} alt="" /></div>
            <p className='text-center pt-1'>{Name}</p>
        </div>
    );
};

export default PopularItemCard;