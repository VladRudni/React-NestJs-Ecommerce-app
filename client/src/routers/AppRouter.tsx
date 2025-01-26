import { Routes, Route } from "react-router";
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { routes } from "../config/routes";
import { NotFoundPage } from "../pages/404";
import { AuthPage } from "../pages/AuthPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<MainPage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.auth.login} element={<AuthPage typePage="login" />} />
      <Route
        path={routes.auth.register}
        element={<AuthPage typePage="register" />}
      />
      {/* if not found. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
