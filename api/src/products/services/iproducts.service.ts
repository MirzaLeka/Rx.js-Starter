import { Observable } from 'rxjs';
import { CreateProductDTO, ProductDTO } from '../models/products.model';

export interface IProductsService {
  createProduct(product: CreateProductDTO): Observable<ProductDTO>;

  getProducts(productName?: string): Observable<ProductDTO[]>;
}
