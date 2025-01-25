import { api } from "./api";

const UserService = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserByToken: builder.mutation({
      query: (token: string) => ({
        url: "/users/get-user/",
        method: "POST",
        body: token,
      }),
    }),
  }),
});
