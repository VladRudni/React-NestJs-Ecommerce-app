import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from 'src/product/dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaServise: PrismaService) {}

  async getAll() {
    return await this.prismaServise.product.findMany({});
  }

  async genOneById(id: string) {
    const product = await this.prismaServise.product.findFirst({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException(`Product with id: ${id} not found.`);
    }

    return product;
  }

  async create(createProductDto: CreateProductDto) {
    return await this.prismaServise.product.create({ data: createProductDto });
  }

  async delete(productId) {
    return await this.prismaServise.product.delete({
      where: { id: productId },
    });
  }

  async update(productId, updateProductDto: UpdateProductDto) {
    const isProductExist = await this.prismaServise.product.findFirst({
      where: { id: productId },
    });

    if (!isProductExist) {
      throw new NotFoundException('Product with this id not found.');
    }

    return await this.prismaServise.product.update({
      where: { id: productId },
      data: { ...updateProductDto },
    });
  }
}
