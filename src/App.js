import { useContext, useEffect } from 'react';
import './App.css';
import { RestaurantContainer, TileContainer } from './components';
import { YelpContext } from './Context';

const App = () => {
  // eslint-disable-next-line global-require
  const axios = require('axios');
  const { restaurantList, setRestaurantList, tags, setTags, categories, setCategories } = useContext(YelpContext);
  // const { RestaurantData } = useContext(YelpContext);

  console.log(restaurantList);
  return (
    <div className="flex flex-wrap justify-center">
      <TileContainer tileContent={categories} title="Categories" />
      <TileContainer tileContent={tags} title="Tags" />
      <RestaurantContainer />
    </div>
  );
};
export default App;

