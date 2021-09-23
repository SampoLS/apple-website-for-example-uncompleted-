import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navgation from "./pages/Header";

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Navgation />
      </BrowserRouter>
    </>
  );
};

export default App;
