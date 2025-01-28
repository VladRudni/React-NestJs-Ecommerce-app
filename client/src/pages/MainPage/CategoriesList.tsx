import { Link } from "react-router";
import { Category } from "../../types/category.types";

interface CategoriesList {
  categories: Category[];
}

export const CategoriesList = ({ categories }: CategoriesList) => {
  return (
    <ul>
      {categories.map((el) => (
        <Link to={"#"} key={el.name}>
          {el.name}
        </Link>
      ))}
    </ul>
  );
};
