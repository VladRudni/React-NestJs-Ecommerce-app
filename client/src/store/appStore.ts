import { makeAutoObservable } from "mobx";

class App {
  IsAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
}

const AppStore = new App();
export default AppStore;
