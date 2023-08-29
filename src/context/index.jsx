import { CompanyContext } from './Company';

const MainContextProvider = ({ children }) => {
  return <CompanyContext>{children}</CompanyContext>;
};

export default MainContextProvider;

export { CompanyContext };
