import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import Container from './components/Generic/container/Continer';
import MainContextProvider from './context';
const App = () => {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <Container>
          <Routes />
        </Container>
      </MainContextProvider>
    </BrowserRouter>
  );
};

export default App;
