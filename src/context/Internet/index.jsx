import { createContext, useContext, useReducer } from 'react';
import { reducer, state } from './reducer';

const InternetProvider = createContext();

export const useInternet = () => useContext(InternetProvider);

export const InternetContext = ({ children }) => {
  return (
    <InternetProvider.Provider value={useReducer(reducer, state)}>
      {children}
    </InternetProvider.Provider>
  );
};
