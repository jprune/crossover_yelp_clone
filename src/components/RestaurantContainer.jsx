import React, { useContext } from 'react';
import { YelpContext } from '../Context';
import { RestaurantList } from './index';

const RestaurantContainer = () => {
  const { restaurantList } = useContext(YelpContext);
  console.log(restaurantList);
  return (
    <div className="mt-10 w-full bg-gray-200 rounded-md mx-2 flex flex-wrap justify-center">
      {restaurantList.map((restaurant, idx) => <RestaurantList restaurant={restaurant} key={idx} />)}
    </div>
  );
};

export default RestaurantContainer;
