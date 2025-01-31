import { Routes, Route } from "react-router";
import { AboutPage } from "../pages/AboutPage";
import { MainPage } from "../pages/MainPage";
import { routes } from "../config/routes";
import { NotFoundPage } from "../pages/404";
import { AuthPage } from "../pages/AuthPage";
import { ContactPage } from "../pages/ContactPage";
import { BasketPage } from "../pages/BasketPage";
import { ProductPage } from "../pages/ProductPage";

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
      <Route path={routes.product} element={<ProductPage />} />

      <Route path={routes.contacts} element={<ContactPage />} />
      <Route
        path={routes.auth.register}
        element={<AuthPage typePage="register" />}
      />
      <Route path={routes.clientRoutes.basket} element={<BasketPage />} />
      {/* if not found. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
