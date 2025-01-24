import { makeAutoObservable } from "mobx";
import { getUserByToken } from "../api/userApi";
import { toast } from "react-toastify";

export interface IUser {
  firstname: string;
  lastName: string;
  email: string;
}

class User {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  token: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  public setUser(user: IUser) {
    this.firstName = user.firstname;
    this.lastName = user.lastName;
    this.email = user.email;
  }

  async tryGetUser() {
    try {
      getUserByToken(this.token)
        .then((data: IUser) => {
          if (!data) {
            return toast("you not auth");
          }
          console.log(data);
          this.setUser(data);
        })
        .catch((error) => {
          console.error(`error: ${error}`);
          return toast("failed connect to database");
        });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new User();
