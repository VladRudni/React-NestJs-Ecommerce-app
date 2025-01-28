import { makeAutoObservable } from "mobx";

class App {
  IsAuth: boolean = false;
  containerEnable: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }
}

const AppStore = new App();
export default AppStore;
