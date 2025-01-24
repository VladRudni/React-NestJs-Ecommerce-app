import { Routes, Route } from "react-router";
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { routes } from "../constants/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<MainPage />} />
      <Route path={routes.about} element={<AboutPage />} />
    </Routes>
  );
};
