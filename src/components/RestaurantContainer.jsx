import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { YelpContext } from '../Context';
// eslint-disable-next-line import/no-cycle
import { RestaurantList } from './index';

const RestaurantContainer = () => {
  const { restaurantList } = useContext(YelpContext);
  console.log(restaurantList);
  return (
    <div className="mt-10 w-full bg-gray-200 rounded-md mx-2 flex flex-wrap justify-center">
      {restaurantList.map((restaurant, idx) => (
        <Link to={`/details/${restaurant.id}`}>
          <RestaurantList restaurant={restaurant} key={idx} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
