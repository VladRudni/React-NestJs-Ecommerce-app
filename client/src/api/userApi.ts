import { api } from ".";

export const getUserByToken = async (token: string) => {
  return (await api.get(`/users/get-user/${token}`)).data;
};
