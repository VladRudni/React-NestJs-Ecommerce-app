import { AxiosResponse } from "axios";
import { PublicApi } from "../api";
import { User } from "../types/user.types";
import { LoginDto, LoginResponse } from "../types/auth.types";

class AuthService {
  getUserByToken(token: string): Promise<AxiosResponse<User>> {
    return PublicApi.post<User>("users/get-user/", { token: token });
  }

  login(loginDto: LoginDto): Promise<AxiosResponse<LoginResponse>> {
    return PublicApi.post<LoginResponse>("auth/login/", {
      email: loginDto.email,
      password: loginDto.password,
    });
  }
}

export default new AuthService();
