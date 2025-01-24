import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

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

  @ApiProperty()
  @Put(':productId')
  update(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    this.productService.update(productId, updateProductDto);
  }

  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return this.productService.delete(productId);
  }
}
