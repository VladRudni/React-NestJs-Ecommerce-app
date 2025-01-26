import { BrowserRouter } from "react-router";
import { AppRouter } from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import UserStore from "./store/userStore";
import "./scss/global.scss";

const App = () => {
  useEffect(() => {
    UserStore.tryGetUser();
  });
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
