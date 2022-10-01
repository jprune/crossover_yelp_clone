import { createContext, useState } from 'react';

export const YelpContext = createContext(); // 1. create context

// eslint-disable-next-line react/function-component-definition
export default function Context({ children }) { // 2. create a function
  return (
    <YelpContext.Provider value={{}}>
      {children}
    </YelpContext.Provider>
  );
}
