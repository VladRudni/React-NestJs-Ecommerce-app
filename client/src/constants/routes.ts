export const routes = {
  home: "/",
  about: "/about",
  shop: "/shop",
  product: "/product/:productId",
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  clientRoutes: {
    account: `account/:dashboardSection`,
    backet: "/basket",
    chekout: "/chekout",
  },
  privateRoutes: {},
};
