import { AxiosResponse } from "axios";
import { PublicApi } from "../api";
import { Product } from "../types/product.types";

class ProductService {
  getProductById(productId: string): Promise<AxiosResponse<Product>> {
    return PublicApi.get<Product>(`product/${productId}`);
  }
}

export default new ProductService();
