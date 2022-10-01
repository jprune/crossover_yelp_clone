import { createContext, useState, useEffect } from 'react';

export const YelpContext = createContext(); // 1. create context

// eslint-disable-next-line react/function-component-definition
export default function Context({ children }) { // 2. create a function
  const axios = require('axios');
  const [restaurantList, setRestaurantList] = useState({});
  const [tags, setTags] = useState(['Fast Food', 'Vegan', 'Drinks', 'Romantic', 'Extravagant']);
  const [categories, setCategories] = useState(['Italian', 'Asian', 'French', 'Mexican', 'Chinese']);
  //   useEffect(() => {
  //     const getRestaurantList = async () => {
  //       try {
  //         const response = await axios.get('https://mini-yelp-clone-backend.herokuapp.com/restaurants');
  //         // console.log(response);
  //         setRestaurantList(response);
  //       } catch (error) {
  //         // console.error(error);
  //       }
  //     };
  //     getRestaurantList();
  //   }, []);

  return (
    <YelpContext.Provider value={{ restaurantList, setRestaurantList, tags, setTags, categories, setCategories }}>
      {children}
    </YelpContext.Provider>
  );
}
