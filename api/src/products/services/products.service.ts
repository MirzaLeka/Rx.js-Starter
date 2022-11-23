import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Repository, ILike } from 'typeorm';
import { ProductEntity } from '../models/products.entity';
import { CreateProductDTO, ProductDTO } from '../models/products.model';
import { IProductsService } from './iproducts.service';

@Injectable()
export class ProductsService implements IProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  createProduct({
    name,
    description,
    image,
  }: CreateProductDTO): Observable<ProductDTO> {
    const productEntity = new ProductEntity();
    productEntity.name = name;
    productEntity.description = description;
    productEntity.image = image;

    return from(this.productsRepository.save(productEntity)).pipe(
      catchError((err) => {
        throw new BadRequestException(err);
      }),
    );
  }

  getProducts(name?: string): Observable<ProductDTO[]> {
    if (name) {
      return this.getProductsByName(name);
    }

    return from(this.productsRepository.find()).pipe(
      catchError((err) => of(err)),
    );
  }

  private getProductsByName(name: string): Observable<ProductDTO[]> {
    return from(
      this.productsRepository.find({
        where: {
          name: ILike(`%${name}%`), // LIKE + case insensitive
        },
        order: {
          name: 'ASC',
        },
      }),
    ).pipe(
      catchError((err) => {
        throw new BadRequestException(err);
      }),
    );
  }
}
