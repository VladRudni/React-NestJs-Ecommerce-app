import { BrowserRouter } from "react-router";
import { AppRouter } from "./routers/AppRouter";
import userStore from "./store/userStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";

const App = observer(() => {
  useEffect(() => {
    userStore.tryGetUser();
  }, []);
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer />
    </BrowserRouter>
  );
});

export default App;
