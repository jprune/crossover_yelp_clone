import React, { useContext } from 'react';
import { YelpContext } from '../Context';

const Tile = ({ tag }) => {
  const { restaurantList } = useContext(YelpContext);
  //   console.log(restaurantList);
  return (
    <div className="flex-shrink-0 p-8 mr-3 rounded-lg bg-red-200 shadow-lg">
      {tag}
    </div>
  );
};

export default Tile;
