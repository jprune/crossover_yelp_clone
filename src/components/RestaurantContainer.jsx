import React, { useContext } from 'react';
import { YelpContext } from '../Context';
import { RestaurantList } from './index';

const RestaurantContainer = () => {
  const { restaurantList } = useContext(YelpContext);
  return (

    <div className="mt-10 bg-gray-200 rounded-md mx-2 flex flex-wrap justify-center">
      <RestaurantList />
    </div>
  );
};

export default RestaurantContainer;
