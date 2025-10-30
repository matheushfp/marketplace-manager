import { IProductDataResponse } from "./product-data-response";

export interface IProductsResponse {
  message: string;
  data: IProductDataResponse[]
}
