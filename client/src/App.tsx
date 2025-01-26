import { BrowserRouter } from "react-router";
import { AppRouter } from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import UserStore from "./store/userStore";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { login } = useAuth();

  useEffect(() => {
    UserStore.tryGetUser();

    login({ email: "rudni2020@gmail.com", password: "Fegages2018" });
  });
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
