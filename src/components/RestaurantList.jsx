import React from 'react';

const RestaurantList = ({ restaurant }) => {
  const tags = 123;

  return (

    <div className="flex flex-wrap justify-center w-full px-5 py-2 bg-gray-300">
      <div className="flex justify-between w-full">
        <p>{restaurant.name}</p>
        <p>{restaurant.city}</p>
      </div>
      <div>
        {restaurant.tags}
      </div>
      <div>
        {restaurant.website}
      </div>
    </div>
  );
};

export default RestaurantList;
