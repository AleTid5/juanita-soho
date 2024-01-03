import { createContext, useReducer } from 'react';
import { dataReducer } from './reducer';

type initialState = {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
};

export const initialState: initialState = {
  location: '',
  checkIn: null,
  checkOut: null,
  guests: { adults: 0, children: 0, infants: 0, pets: 0 },
};

export const DataContext = createContext(null);

export const ContextProvider = ({ children }) => (
  <DataContext.Provider value={useReducer(dataReducer, initialState)}>
    {children}
  </DataContext.Provider>
);
