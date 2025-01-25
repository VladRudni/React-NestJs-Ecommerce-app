import { makeAutoObservable } from "mobx";

export interface IUser {
  firstname: string;
  lastName: string;
  email: string;
}

class User {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  token: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJWbGFkdXNsYXYiLCJsYXN0TmFtZSI6IlJ1ZG5pdHNraXkiLCJlbWFpbCI6InJ1ZG5pMjIyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTczNzgzNTU4MiwiZXhwIjoxNzM3OTIxOTgyfQ.WxdaXq6WhIZSiBO956Iq5ESfx10pK6Vm9VolVhtKuCM";

  constructor() {
    makeAutoObservable(this);
  }

  public setUser(user: IUser) {
    this.firstName = user.firstname;
    this.lastName = user.lastName;
    this.email = user.email;
  }

  async tryGetUser() {
    if (!this.token) return;
  }
}

const UserStore = new User();
export default UserStore;
