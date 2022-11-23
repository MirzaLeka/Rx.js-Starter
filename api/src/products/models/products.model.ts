export interface CreateProductDTO {
  name: string;
  description?: string;
  image?: string;
}

export interface ProductDTO {
  id: number;
  name: string;
  description?: string;
  image?: string;
  dateCreated: string;
}
