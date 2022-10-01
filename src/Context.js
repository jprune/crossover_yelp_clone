import { createContext, useState, useEffect } from 'react';

export const YelpContext = createContext(); // 1. create context

// eslint-disable-next-line react/function-component-definition
export default function Context({ children }) { // 2. create a function
  const axios = require('axios');
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: '6337fce518dc251c2a411b10',
      name: 'Burger King Schweiz',
      image: 'https://images.unsplash.com/photo-1626229652216-e5bb7f511917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      website: 'https://www.burgerking.de',
      city: 'Augsburg',
      street: 'Gabelsbergerstraße',
      streetnumber: 7,
      phonenumber: '0821 99880055',
      latitude: '48.34726063741718',
      longitude: '10.871004041208831',
      rating: 2,
      tags: [
        'Fast Food',
        'Vegan',
        'Drinks',
      ],
      __v: 0,
    },
    {
      _id: '6337fce518dc251c2a411b09',
      name: 'Burger King Augsburg',
      image: 'https://images.unsplash.com/photo-1626229652216-e5bb7f511917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      website: 'https://www.burgerking.de',
      city: 'Augsburg',
      street: 'Gabelsbergerstraße',
      streetnumber: 7,
      phonenumber: '0821 99880055',
      latitude: '48.34726063741718',
      longitude: '10.871004041208831',
      rating: 2,
      tags: [
        'Fast Food',
        'Vegan',
        'Drinks',
      ],
      __v: 0,
    },
  ]);
  const [tags, setTags] = useState(['Fast Food', 'Vegan', 'Drinks', 'Romantic', 'Extravagant']);
  const [categories, setCategories] = useState(['Italian', 'Asian', 'French', 'Mexican', 'Chinese']);
  //   useEffect(() => {
  //     const getRestaurantList = async () => {
  //       try {
  //         const response = await axios.get('https://mini-yelp-clone-backend.herokuapp.com/restaurants');
  //         // console.log(response);
  //         setRestaurantList(response);
  //       } catch (error) {
  //         console.error(error);
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
