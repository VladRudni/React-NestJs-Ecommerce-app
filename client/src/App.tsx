import { BrowserRouter } from "react-router";
import { AppRouter } from "./routers/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
