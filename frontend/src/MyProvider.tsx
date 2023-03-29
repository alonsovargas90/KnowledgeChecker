import React, { useState } from 'react';
import { MyContext, MyContextInterface } from './context';

interface MyProviderProps {
    children: React.ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [myState, setMyState] = useState<string[]>([]);

  const myContext: MyContextInterface = {
    myState,
    setMyState,
  };

  return <MyContext.Provider value={myContext}>{children}</MyContext.Provider>;
};