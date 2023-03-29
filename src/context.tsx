import React from 'react';

export interface MyContextInterface {
  myState: string[];
  setMyState: (state: string[]) => void;
}

export const MyContext = React.createContext<MyContextInterface>({
  myState: [],
  setMyState: () => {},
});
