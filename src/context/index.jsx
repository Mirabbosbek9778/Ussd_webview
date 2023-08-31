import { CompanyContext } from './Company';
import { InternetContext } from './Internet';

const MainContextProvider = ({ children }) => {
  return (
    <CompanyContext>
      <InternetContext>{children}</InternetContext>
    </CompanyContext>
  );
};

export default MainContextProvider;
