export const routes = {
  home: "/",
  about: "/about",
  shop: "/shop",
  contacts: "/contacts",
  product: "/product/:productId",
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  clientRoutes: {
    account: `account/:dashboardSection`,
    backet: "/basket",
    chekout: "/chekout",
    wishlist: "/wishlist",
  },
  privateRoutes: {},
};
