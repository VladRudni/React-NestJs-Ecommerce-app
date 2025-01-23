import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaServise: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prismaServise.user.findFirst({ where: { email: email } });
  }

  async create(createUserDto: CreateUserDto) {
    const isUserExist = this.findByEmail(createUserDto.email);

    if (isUserExist) {
      return new BadRequestException('A user with this email already exists.');
    }

    const user = await this.prismaServise.user.create({
      data: { ...createUserDto, basket: {} },
    });
    return user;
  }

  async updateUser() {}
}
