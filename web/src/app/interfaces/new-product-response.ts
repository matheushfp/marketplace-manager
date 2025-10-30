export interface INewProductResponse {
  message: string;
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    status: string;
    imageBase64: string;
  }
}
