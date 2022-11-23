import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { HttpDelayInterceptor } from 'src/interceptors/http-delay.interceptor';
import { CreateProductDTO, ProductDTO } from '../models/products.model';
import { ProductsService } from '../services/products.service';

@Controller('/api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  CreateProduct(@Body() product: CreateProductDTO): Observable<ProductDTO> {
    return this.productsService.createProduct(product);
  }

  @Get()
  @UseInterceptors(HttpDelayInterceptor)
  getProducts(@Query('name') name: string): Observable<ProductDTO[]> {
    return this.productsService.getProducts(name);
  }
}
