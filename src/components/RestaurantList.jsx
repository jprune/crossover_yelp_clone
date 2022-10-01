import React from 'react';

const RestaurantList = ({ restaurant }) => (

  <div className="flex flex-wrap justify-center w-full px-5 py-2 mb-3 bg-red-200 border-2 border-red-800 rounded-2xl">
    <div className="flex justify-between w-full">
      <p>{restaurant.name}</p>
      <p>City: {restaurant.city}</p>
    </div>
    <div className="flex justify-between w-full">
      What to expect: {restaurant.tags.map((item, idx) => <p key={idx}>{item}</p>)}
    </div>
    {/* <div className="flex justify-between w-full">
      Want to know more? <a href={restaurant.website} target="_blank" className="no-underline" rel="noreferrer">{restaurant.website}</a>
    </div> */}
  </div>
);

export default RestaurantList;
