import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKCEND_URL;

export const PublicApi = axios.create({
  baseURL: BACKEND_URL,
});

export const ClientApi = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer$ ${"ss"}`,
  },
});

export function catchError(error: unknown) {
  console.error(`Error with request: ${error}`);
  toast.error("An error occurred during the request");
  throw error; // Повторно выбрасываем оригинальную ошибку
}
