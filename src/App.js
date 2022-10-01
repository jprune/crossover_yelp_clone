import { useContext, useEffect } from 'react';
import './App.css';
import { RestaurantContainer, TileContainer, SearchBox } from './components';
import { YelpContext } from './Context';

const App = () => {
  const { tags, categories } = useContext(YelpContext);
  return (
    <div className="flex flex-wrap justify-center">
      <SearchBox />
      <TileContainer tileContent={categories} title="Categories" />
      <TileContainer tileContent={tags} title="Tags" />
      <RestaurantContainer />
    </div>
  );
};
export default App;

