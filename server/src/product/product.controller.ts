import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll() {
    return this.productService.getAll();
  }

  @ApiProperty()
  @Get(':productId')
  getOneById(@Param('productId') productId: string) {
    return this.productService.genOneById(productId);
  }

  @ApiProperty()
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
}
