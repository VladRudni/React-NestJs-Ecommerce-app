import { AxiosResponse } from "axios";
import { PublicApi } from "../api";
import { IUser } from "../types/user.types";
import { ILoginDto, ILoginResponse } from "../types/auth.types";

class AuthService {
  getUserByToken(token: string): Promise<AxiosResponse<IUser>> {
    return PublicApi.post<IUser>("users/get-user/", { token: token });
  }

  login(loginDto: ILoginDto): Promise<AxiosResponse<ILoginResponse>> {
    return PublicApi.post<ILoginResponse>("auth/login/", {
      email: loginDto.email,
      password: loginDto.password,
    });
  }
}

export default new AuthService();
