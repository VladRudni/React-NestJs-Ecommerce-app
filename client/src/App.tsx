import { BrowserRouter } from "react-router";
import { AppRouter } from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
