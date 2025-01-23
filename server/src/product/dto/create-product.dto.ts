import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto implements Prisma.ProductCreateInput {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsString()
  shortDescripiton?: string;
}
