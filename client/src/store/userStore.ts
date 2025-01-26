import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { catchError } from "../api";
import { IUser } from "../types/user.types";

class User {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  token: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.firstName = user.firstname;
    this.lastName = user.lastName;
    this.email = user.email;
  }

  async tryGetUser() {
    if (!this.token) return;

    try {
      const data = await AuthService.getUserByToken(this.token);
      const user = data.data;
      if (!user) {
        return;
      }
      this.setUser(user);
    } catch (error) {
      catchError(error);
    }
  }
}

const UserStore = new User();
export default UserStore;
