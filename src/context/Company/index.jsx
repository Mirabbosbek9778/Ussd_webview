import { createContext, useContext, useReducer } from 'react';
import { reducer, state } from './reducer';

const CompanyProvider = createContext();

export const useCompany = () => useContext(CompanyProvider);

export const CompanyContext = ({ children }) => {
  return (
    <CompanyProvider.Provider value={useReducer(reducer, state)}>
      {children}
    </CompanyProvider.Provider>
  );
};
