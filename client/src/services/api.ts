import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query/dist";

export const api = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001" }),
  endpoints: (builder) => ({}),
});
