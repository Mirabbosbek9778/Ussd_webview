import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import Container from "./components/Generic/container/Continer";
const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
