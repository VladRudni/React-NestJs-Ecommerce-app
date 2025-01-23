import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
