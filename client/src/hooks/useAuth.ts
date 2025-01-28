import AuthService from "../services/AuthService";
import UserStore from "../store/userStore";
import { LoginDto } from "../types/auth.types";

export const useAuth = () => {
  function login(loginDto: LoginDto) {
    AuthService.login({
      email: loginDto.email,
      password: loginDto.password,
    }).then((data) => {
      const token = data.data.token;
      UserStore.token = token;
    });
  }

  function register() {}

  return { login, register };
};
