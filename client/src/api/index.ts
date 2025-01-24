import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BACKCEND_URL,
  headers: { Authorization: `Bearer ${"awdawd"}` },
});
