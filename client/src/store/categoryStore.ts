import { makeAutoObservable } from "mobx";
import { Category } from "../types/category.types";

class CategoryStore {
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllCategories() {
    return (this.categories = [
      { name: "Woman’s Fashion" },
      { name: "Men’s Fashion" },
      { name: "Electronics" },
      { name: "Home & Lifestyle" },
      { name: "Medicine" },
      { name: "Sports & Outdoor" },
      { name: "Baby’s & Toys" },
      { name: "Groceries & Pets" },
      { name: "Health & Beauty" },
    ]);
  }
}

export default new CategoryStore();
